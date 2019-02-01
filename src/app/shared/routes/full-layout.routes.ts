import { Routes } from '@angular/router';

export const Full_ROUTES: Routes = [
  {
    path: 'post',
    loadChildren: './post/post.module#PostModule'
  },
  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full'
  }
];
