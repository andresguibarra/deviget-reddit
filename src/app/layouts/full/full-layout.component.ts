import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  options = {
    direction: 'ltr'
  };
  constructor() {}

  ngOnInit() {}


  isMobile() {
    return (
      navigator.maxTouchPoints || 'ontouchstart' in document.documentElement
    );
  }
}
