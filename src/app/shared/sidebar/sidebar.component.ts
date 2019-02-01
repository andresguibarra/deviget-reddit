import { Component, OnInit } from '@angular/core';
import { RoutesService } from './sidebar-routes.config';
import { RedditService } from '../services/reddit.service';
import { ClientChildrenEntity } from '../models/client.models';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      .card .card-block {
        padding: 0.5rem 0.5rem 1.5rem;
      }
      .card.router-link-active {
        outline: 3px solid #0cc27e;
        outline-offset: -3px;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {
  public posts: ClientChildrenEntity[] = [];

  constructor(
    private redditService: RedditService,
    private router: Router,
    public navbarService: NavbarService
  ) {}

  ngOnInit() {
    this.redditService.getTopPosts().subscribe(c => {
      this.posts = c;
      this.posts.forEach(t => {
        t.hours_message = this.getHours(t.data.created_utc) + ' hours ago';
      });
      if (this.posts.length > 0) {
        this.router.navigate(['/post', this.posts[0].data.id]);
      }
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
  dismissPost(id: string) {
    this.redditService.dismissPost(id);
  }

  dismissAll() {
    this.redditService.dismissAll();
  }

  previous() {
    this.redditService.previous().subscribe();
  }

  next() {
    this.redditService.next().subscribe();
  }
}
