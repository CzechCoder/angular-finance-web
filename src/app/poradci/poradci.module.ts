import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoradciRoutingModule } from './poradci-routing.module';
import { PoradciSeznamComponent } from './poradci-seznam/poradci-seznam.component';
import { PoradceComponent } from './poradce/poradce.component';


@NgModule({
  declarations: [
    PoradciSeznamComponent,
    PoradceComponent
  ],
  imports: [
    CommonModule,
    PoradciRoutingModule
  ]
})
export class PoradciModule { }
