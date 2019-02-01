import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { RedditPosts } from '../models/reddit.models';

@Injectable()
export class RedditService {
  constructor(private httpClient: HttpClient) {}

  getTopPosts(): Observable<RedditPosts> {
    return this.httpClient
      .get<RedditPosts>('https://www.reddit.com/r/all/top/.json?limit=50');
  }
}
