import { Component, OnInit } from '@angular/core';
import { RoutesService } from './sidebar-routes.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  constructor(private routesService: RoutesService) {}

  ngOnInit() {
    this.menuItems = this.routesService.ROUTES.filter(menuItem => menuItem);
  }
}
