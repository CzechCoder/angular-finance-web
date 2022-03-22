import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klient',
  template: `

  <section class="section bg-primary">
  <div class="container is-max-widescreen">

      <div class="columns">

      <div class="column is-6">
          <h1 class="xg">Poradenství</h1>
          <p class="sg">Komplexní majetkové poradenství se servisem</p>
      </div>

      <div class="column is-6">
      <img src="./assets/images/klient.jpg" alt="">
  </div>

  </div>

</div>
</section>

<!-- Subhead  -->

<section class="section features-sub-head bg-light">
<div class="container is-max-widescreen">
  <div>
      <h1 class="md">Není to jen o penězích</h1>
      <p>Přesto víme, že jsou důležité a je neméně důležité si vybrat správné produkty, které zajistí, že ať se stane cokoliv, nezůstanete na suchu. Proto Vám nabízíme pomoc s výběrem a kompletní servis ohledně těchto aspektů Vašeho života:</p>
  </div>

</div>
</section>

<section class="section features-main">
<div class="container is-max-widescreen">

<div class="grid grid-3">
<div class="card flex">
<i class="fa fa-heartbeat fa-3x"></i>
<p>Zajištění životní úrovně v případě neštěstí jako jsou úrazy, vážné nemoci, nebo ztráta zaměstnání. Budete mít jistotu, že vybraný pojistný produkt bude Vám šitý přímo na míru a budete správně vykompenzováni.</p>
</div>

<div class="card flex">
<i class="fa fa-money fa-3x"></i>
<p>Investice nejen pro překonání inflace, ale i rozmnožování Vašich finančních prostředků pro důchod, nebo školy Vašich dětí.</p>
</div>

<div class="card flex">
<i class="fa fa-heart-o fa-3x"></i>
<p>Zajištění Vás i Vaší rodiny do budoucna pomocí penzijního připojištění.</p>
</div>

<div class="card flex">
<i class="fa fa-building fa-3x"></i>
<p>Zajištění úvěrů na bydlení, i jiné účely s výhodnými podmínkami a sazbou.</p>
</div>

<div class="card flex">
<i class="fa fa-handshake-o fa-3x"></i>
<p>Jsme placeni partnerskými společnostmi, Vy nám nebudete dlužit ani korunu.</p>
</div>

<div class="card flex">
<i class="fa fa-wrench fa-3x"></i>
<p>Doživotní servis, dokud Jste našimi klienty, budeme pro Vás stále k dispozici.</p>
</div>

</div>

</div>
</section>

  `,
  styles: [
  ]
})
export class KlientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
