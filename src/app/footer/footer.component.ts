import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer bg-primary">
  <section class="section">
  <div class="container is-max-widescreen">

  <div class="columns is-multiline">

  <div class="column is-4">
  <h1>Finance s.r.o.</h1>
  <p>Copyright © 2022</p>
  </div>

  <div class="column is-4">
    <a class="navbar-item" routerLink="/">Domů</a>
    <a class="navbar-item" routerLink="/klient">Klient</a>
    <a class="navbar-item" routerLink="/poradci">Poradci</a>
  </div>

  <div class="column is-4">
  <div class="social">
            <a href="#"><i class="fa fa-linkedin fa-2x"></i></a>
            <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
            <a href="#"><i class="fa fa-instagram fa-2x"></i></a>
            <a href="#"><i class="fa fa-twitter fa-2x"></i></a>
        </div>
  </div>

  </div>

  </div>
  </section>
  </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
