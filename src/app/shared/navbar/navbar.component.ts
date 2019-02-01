import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  toggleClass = 'ft-maximize';
  public isCollapsed = true;

  constructor(public navbarService: NavbarService) {}

  ToggleClass() {
    if (this.toggleClass === 'ft-maximize') {
      this.toggleClass = 'ft-minimize';
    } else {
      this.toggleClass = 'ft-maximize';
    }
  }
}
