import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'app/shared/services/navbar.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  options = {
    direction: 'ltr'
  };
  constructor(public navbarService: NavbarService) {}

  ngOnInit() {}

  isMobile() {
    return (
      navigator.maxTouchPoints || 'ontouchstart' in document.documentElement
    );
  }

  hideSidebar() {
    if (this.isMobile()) {
      return this.navbarService.HideSidebar;
    } else {
      return false;
    }
  }
}
