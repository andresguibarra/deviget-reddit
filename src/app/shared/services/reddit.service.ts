import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, of } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { RedditPosts } from '../models/reddit.models';
import { ClientChildrenEntity } from '../models/client.models';
import { tap, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class RedditService {
  private posts: ReplaySubject<ClientChildrenEntity[]> = new ReplaySubject(1);
  // private posts: ClientChildrenEntity[] = [];
  constructor(private httpClient: HttpClient) {}

  getTopPosts(): Observable<RedditPosts> {
    return this.httpClient
      .get<RedditPosts>('https://www.reddit.com/r/all/top/.json?limit=50')
      .pipe(
        tap(c => {
          this.posts.next(c.data.children as ClientChildrenEntity[]);
        })
      );
  }

  getPost(id): Observable<ClientChildrenEntity> {
    return this.posts.pipe(switchMap(c => of(c.find(t => t.data.id === id))));
  }
}
