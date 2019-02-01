import { NgModule } from '@angular/core';

import { PostComponent } from './post.component';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post.routing.module';

@NgModule({
  imports: [CommonModule, PostRoutingModule],
  exports: [],
  declarations: [PostComponent],
  providers: []
})
export class PostModule {}
