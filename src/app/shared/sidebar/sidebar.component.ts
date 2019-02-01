import { Component, OnInit } from '@angular/core';
import { RoutesService } from './sidebar-routes.config';
import { RedditService } from '../services/reddit.service';
import { ClientChildrenEntity } from '../models/client.models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      .card .card-block {
        padding: 0.5rem 0.5rem 1.5rem;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {
  public posts: ClientChildrenEntity[] = [];

  constructor(private redditService: RedditService) {}

  ngOnInit() {
    this.redditService.getTopPosts().subscribe(c => {
      this.posts = c.data.children as ClientChildrenEntity[];
      this.posts.forEach(t => {
        t.hours_message = this.getHours(t.data.created_utc) + ' hours ago';
      });
    });
  }

  getHours(unixDate) {
    const date1 = new Date(unixDate * 1000);
    const date = new Date();
    const dateAux = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
    );
    const date2 = new Date(dateAux);

    const diff = date2.getTime() - date1.getTime();

    return Math.floor(diff / (1000 * 60 * 60));
  }
}
