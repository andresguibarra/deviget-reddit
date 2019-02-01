import { RouteInfo } from './sidebar.metadata';
import { Injectable } from '@angular/core';

@Injectable()
export class RoutesService {
  constructor() {}
  get ROUTES(): RouteInfo[] {
    return [
      {
        path: '/taskboard',
        title: 'Tasks',
        icon: 'ft-file-text',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ];
  }
}
