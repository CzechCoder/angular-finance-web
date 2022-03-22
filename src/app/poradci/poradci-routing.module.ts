import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoradceComponent } from './poradce/poradce.component';
import { PoradciSeznamComponent } from './poradci-seznam/poradci-seznam.component';

const routes: Routes = [
  {
    path: '',
    component: PoradciSeznamComponent
  },
  {
    path: ':username',
    component: PoradceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoradciRoutingModule { }
