import { Component, OnInit } from '@angular/core';
import { PoradceService } from 'src/app/Services/poradce.service';

@Component({
  selector: 'app-poradci-seznam',
  template: `

  <section class="section docs-head bg-primary">
        <div class="container is-max-widescreen">
            <div class="columns">

            <div class="column is-6">
                <h1 class="xg">Pracujte s námi</h1>
                <p class="sg">Spokojenost a růst podnikání našich konzultantů je pro nás prioritou</p>
            </div>
            <div class="column is-6">
            <img src="./assets/images/poradce.jpg" alt="">
            </div>

            </div>
        </div>
    </section>

    <!-- Poradci hlavni sekce  -->

<section class="section poradci-main">
    <div class="container grid is-max-widescreen">

        <div class="card card-padding bg-light poradci-left">
            <h3 class="sg">Struktura</h3>
            <nav>
                <ul>
                    <li><a href="#" class="text-primary">Zasmluvnění</a></li>
                    <li><a href="#">Kariérní postup</a></li>
                    <li><a href="#">Zisky a provize</a></li>
                </ul>
            </nav>
            <h3 class="sg">Nástroje</h3>
            <nav>
                <ul>
                    <li><a href="#">4EKO</a></li>
                    <li><a href="#">4PLAN</a></li>
                    <li><a href="#">BT Kredit</a></li>
                    <li><a href="#">BT Invest</a></li>
                </ul>
            </nav>
        </div>

        <div class="card card-padding poradci-right">
            <h2>Představení</h2>
            <p>Filozofie naší značky je založena na upřímném a vzájemně prosperujícím vztahu mezi námi a našimi konzultanty. Kromě podpory, vzdělávání a inovativních nástrojů má každý konzultant garantované vlastnictví svého klientského kmene. Navíc, klíčoví spolupracovníci mohou přímo ovlivňovat směřování společnosti a dokonce se podílet na jejím zisku.</p>
            <div class="alert alert-success">
                <i class="fa fa-info-circle"></i> Pokud přecházíte z jiné poradenské společnosti, zdarma Vám spočítáme hodnotu Vašeho klientského kmene.
            </div>
            <h3>Naše unikátní nástroje Vám usnadní práci.</h3>
            <p>Tímto způsobem zrychlíme vaši práci profesionálních konzultantů. Vy se poté stanete tváří aplikací a systémů u klientů. Vývoj v oblasti fin-tech je nezadržitelný a nyní je ta pravá chvíle svézt se na vlně velkých příležitostí.</p>
            <a href="#" class="btn btn-primary">Demo 4EKO</a>
            <h3>Kde začneme?</h3>
            <ul>
                <li>Domluvte si s námi schůzku</li>
                <li>Řekněte nám Vaše očekávání</li>
            </ul>
            <h3>Manažer či poradce?</h3>
            <p>Manažer - vůdce týmu</p>
            <div class="alert alert-code">Veďte tým, pomáhejte mu růst a mějte podíl na jeho zisku.</div>       
            <p>Poradce - elitní odborník na majetkové poradenství</p>
            <div class="alert alert-code">Orientace na klienty, vrcholné certifikace, rostoucí provize.</div>       
        </div>
    </div>
</section>


  <section class="section poradci">
  <div class="container is-max-widescreen">
  <h3 class="text-center">
  Poznejte tým našich zkušených poradců.
</h3>

    <div class="columns is-multiline" *ngIf="users">

<div class="column is-6" *ngFor="let user of users.results">
    
<div class="card">
    <div class="card-content user-profile">
    <img [src]="user.picture.large">
    <div class="user-details">
    <h2 class="user-name">{{user.name.first + " " + user.name.last}}</h2>
    <p class="user-title" *ngIf="user.registered.age > 11">Poradce</p>
    <p class="user-title" *ngIf="user.registered.age < 11">Elitní Poradce</p>
    <p><i class="fa fa-building"></i>{{user.location.city}}</p>
    <p><i class="fa fa-envelope"></i>{{user.email}}</p>
    <p><i class="fa fa-phone"></i>{{user.cell}}</p>
    </div>
    </div>
  </div>

</div>

</div>

  </div>
  </section>
  `,
  styles: []
})
export class PoradciSeznamComponent implements OnInit {
  users=<any>[]
  userslist=<any>[]
  user=<any>[]

  constructor(private poradceService: PoradceService) { }

  ngOnInit() {
    this.users = this.poradceService.getUsers()
    .subscribe(users => {
        console.log(users);
        this.users = users;
    })
  }

}
