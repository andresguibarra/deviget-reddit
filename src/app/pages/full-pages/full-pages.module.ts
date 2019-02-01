import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FullPagesRoutingModule } from './full-pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FullPagesRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
  ]
})
export class FullPagesModule {}
