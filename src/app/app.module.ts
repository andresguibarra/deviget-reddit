import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutesService } from './shared/sidebar/sidebar-routes.config';
import { RedditService } from './shared/services/reddit.service';
import { NavbarService } from './shared/services/navbar.service';

@NgModule({
  declarations: [AppComponent, FullLayoutComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [RoutesService, RedditService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
