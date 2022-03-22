import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div class="navbar is-dark bg-primary" #scroll>
      <div class="container is-max-widescreen">
        <!-- logo -->
        <div class="navbar-brand">
          <h1>Finance s.r.o.</h1>
        </div>

        <a
          class="navbar-burger"
          id="burger"
          style="width:100%"
          (click)="showMenu()"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <!-- menu -->
        <div class="navbar-menu" id="navbar-links" [class.is-active]="check">
          <div class="navbar-end">
            <a class="navbar-item" routerLink="/">Domů</a>
            <a class="navbar-item" routerLink="/klient">Klient</a>
            <a class="navbar-item" routerLink="/poradci">Poradci</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  check: boolean = false;

  constructor() {}

  ngOnInit() {}

  showMenu() {
    this.check = !this.check;
  }
}
