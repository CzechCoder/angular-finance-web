import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="showcase section">
  <div class="container is-max-widescreen">

      <div class="tile is-ancestor">

      <div class="tile is-parent is-7">
      <div class="showcase-text">
      <h1>Finance bez starostí</h1>
      <p>
        Jsme společnost zabývající se profesionálním majetkovým poradenstvím, jejíž unikátnost  spočívá v propojení a synergii více než 15letých zkušeností čtyř významných ředitelství z finančního trhu.
      </p>
      <a routerLink="/klient" class="btn btn-outline">Zjistit víc</a>
    </div>
      </div>

      <div class="tile is-5">
      <div class="showcase-form card">
      <h2>Domluvit konzultaci</h2>

      <form (ngSubmit)="submitForm()">

        <div class="form-control">
          <input
          type="text"
          name="name"
          placeholder="Jméno"
          [(ngModel)]="name"
          required />
        </div>
        <div class="form-control">
          <input
            type="text"
            name="phone"
            placeholder="Telefon"
            [(ngModel)]="phone"
            required
          />
        </div>
        <div class="form-control">
          <input
          type="text"
          name="email"
          placeholder="Email"
          [(ngModel)]="email"
          required />
        </div>
        <input type="submit" value="Odeslat" class="btn btn-primary" />

      </form>
    </div>
      </div>

    </div>

    </div>
    </section>

    <!-- Stats -->
<section class="stats section">
    <div class="container is-max-widescreen">
        <h3 class="stats-heading text-center">
            Jsme mladá, rychle expandující společnost složená ze zkušených poradců.
        </h3>

        <div class="columns text-center">
            <div class="column is-4">
                <i class="fa fa-address-book fa-3x"></i>
                <h3>10,349</h3>
                <p class="text-secondary">Klientů</p>
            </div>
            <div class="column is-4">
                <i class="fa fa-handshake-o fa-3x"></i>
                <h3>50</h3>
                <p class="text-secondary">Partnerských společností</p>
            </div>
            <div class="column is-4">
                <i class="fa fa-user-o fa-3x"></i>
                <h3>1,458</h3>
                <p class="text-secondary">Poradců</p>
            </div>
        </div>
    </div>
</section>

<!-- Happy -->

<section class="happy section">
    <div class="container is-max-widescreen" >

      <div class="columns">

      <div class="column is-7">
        <img src="./assets/images/happy.jpg" alt="">
      </div>

      <div class="tile is-vertical">
        <div class="card is-child">
            <h3>Investice, pojištění, úvěry</h3>
        </div>
        <div class="card is-child">
            <h3>Vy žijete, my se staráme</h3>
        </div>
      </div>
        
      </div>

    </div>
</section>

<!-- Kariera -->
<section class="bg-primary section">
    <div class="container is-max-widescreen">

    <div class="columns">

        <div class="column is-7 text-center">
            <h2 class="lg">Vaše kariéra u nás</h2>
            <p class="sg">Spokojenost a růst podnikání našich konzultantů je pro nás prioritou.</p>
            <a routerLink="/poradci" class="btn btn-dark">Zjistit víc</a>
        </div>

        <div class="column is-5">
        <img src="./assets/images/kariera.jpg" alt="">
        </div>

    </div>

    </div>
</section>

<!-- partners -->

<section class="partners section">
    <h2 class="mg text-center">
      Partnerské finanční instituce
    </h2>
    <div class="container flex is-max-widescreen">
        <div class="card">
            <h4>Allianz</h4>
            <img src="./assets/images/logos/allianz.png">
        </div>
        <div class="card">
            <h4>ČSOB</h4>
            <img src="./assets/images/logos/csob.png">
        </div>
        <div class="card">
            <h4>Conseq</h4>
            <img src="./assets/images/logos/conseq.png">
        </div>
        <div class="card">
            <h4>MetLife</h4>
            <img src="./assets/images/logos/metlife.png">
        </div>
        <div class="card">
            <h4>Moneta</h4>
            <img src="./assets/images/logos/moneta.png">
        </div>
        <div class="card">
            <h4>J&T</h4>
            <img src="./assets/images/logos/jat.png">
        </div>
        <div class="card">
            <h4>NN</h4>
            <img src="./assets/images/logos/nn.png">
        </div>
    </div>
    <h3 class="text-center">
      a mnoho dalších...
    </h3>
</section>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  name: string | undefined;
  phone: string | undefined;
  email: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `Děkujeme za Váš zájem. Vaše jméno je ${this.name}. Váš telefon je ${this.phone} a Váš email je ${this.email}. Ozveme se hned, jak to bude možné.`;
    alert(message);
  }

}
