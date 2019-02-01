import { Component } from '@angular/core';
import { RedditService } from './shared/services/reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private redditService: RedditService) {
    this.redditService.getTopPosts().subscribe(c => console.log(c));
  }
}
