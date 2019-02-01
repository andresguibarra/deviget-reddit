import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditService } from 'app/shared/services/reddit.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Data1 } from 'app/shared/models/reddit.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit, OnDestroy {
  html: SafeHtml;
  isHtml: boolean;
  isVideo: boolean;
  isImage: boolean;
  videoUrl: string;
  imageUrl: string;
  post: Data1;

  private subscriptions = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private redditService: RedditService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.activatedRoute.params.subscribe(p => {
        if (p['id'] !== undefined) {
          this.subscriptions.add(
            this.redditService.getPost(p['id']).subscribe(post => {
              if (post !== undefined) {
                this.processPost(post.data);
              }
            })
          );
        }
      })
    );
  }

  processPost(data: Data1): void {
    this.post = data;
    this.isHtml = false;
    this.isVideo = false;
    this.isImage = false;
    if (data.is_reddit_media_domain && data.is_video) {
      this.videoUrl = data.secure_media.reddit_video.fallback_url;
      this.isVideo = true;
    } else if (
      data.media_embed !== undefined &&
      data.media_embed.content !== undefined
    ) {
      this.html = this.domSanitizer.bypassSecurityTrustHtml(
        data.media_embed.content.replace('&lt;', '<').replace('&gt;', '>')
      );
      this.isHtml = true;
    } else {
      this.isImage = true;
      this.imageUrl = data.url;
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
