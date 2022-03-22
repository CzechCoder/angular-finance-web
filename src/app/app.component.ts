import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <router-outlet (activate)="onActive()"></router-outlet>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  
  constructor() {}

  onActive() {
    window.scroll(0,0);
  }
  
}
