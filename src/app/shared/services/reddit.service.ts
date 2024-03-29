import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, of } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { RedditPosts } from '../models/reddit.models';
import { ClientChildrenEntity } from '../models/client.models';
import { tap, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class RedditService {
  private $posts: ReplaySubject<ClientChildrenEntity[]> = new ReplaySubject(1);
  private posts: ClientChildrenEntity[] = [];
  private after: string;
  private before: string;
  constructor(private httpClient: HttpClient) {}

  getTopPosts(
    after: boolean,
    before: boolean
  ): Observable<ClientChildrenEntity[]> {
    return this.httpClient.get<RedditPosts>(this.getUrl(after, before)).pipe(
      switchMap(c => {
        this.posts = [];
        c.data.children.forEach(t => {
          if (!this.isDismissed(t.data.id)) {
            this.posts.push(t as ClientChildrenEntity);
          }
        });
        this.$posts.next(this.posts);
        this.after = c.data.after;
        this.before = c.data.before;
        return this.$posts;
      }),
      tap(c => {
        c.forEach(t => {
          t.seen = this.isSeen(t.data.id);
        });
      })
    );
  }
  getUrl(after: boolean, before: boolean): string {
    if (after) {
      return (
        'https://www.reddit.com/r/all/top/.json?limit=50&count=50' +
        '&after=' +
        this.after
      );
    }

    if (before) {
      return (
        'https://www.reddit.com/r/all/top/.json?limit=50&count=50' +
        '&before=' +
        this.before
      );
    }

    return 'https://www.reddit.com/r/all/top/.json?limit=50&count=50';
  }

  getPost(id: string): Observable<ClientChildrenEntity> {
    return this.$posts.pipe(
      switchMap(c => {
        const post = c.find(t => t.data.id === id);
        if (post !== undefined) {
          post.seen = true;
          this.saveSeenPost(post.data.id);
        }
        return of(post);
      })
    );
  }

  saveSeenPost(id: string) {
    const seenList = this.getListFromStorage('seenList');
    seenList.push(id);
    localStorage.setItem('seenList', JSON.stringify(seenList));
  }

  dismissPost(id: string) {
    const dismissList = this.getListFromStorage('dismissList');
    dismissList.push(id);
    localStorage.setItem('dismissList', JSON.stringify(dismissList));
    this.posts.forEach((t, index) => {
      if (t.data.id === id) {
        this.posts.splice(index, 1);
      }
    });
    this.$posts.next(this.posts);
  }

  dismissAll() {
    this.posts.map(p => p.data.id).forEach(t => this.dismissPost(t));
  }

  isDismissed(id) {
    const dismissList = this.getListFromStorage('dismissList');
    const dismiss = dismissList.find(d => d === id);
    return dismiss !== null && dismiss !== undefined;
  }

  getListFromStorage(key) {
    let list = [];
    if (
      localStorage.getItem(key) !== undefined &&
      localStorage.getItem(key) !== null
    ) {
      list = JSON.parse(localStorage.getItem(key));
    }
    return list;
  }

  isSeen(id) {
    const seenList = this.getListFromStorage('seenList');
    const seen = seenList.find(s => s === id);
    return seen !== null && seen !== undefined;
  }
}
