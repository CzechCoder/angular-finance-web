import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KlientComponent } from './klient/klient.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'klient',
    component: KlientComponent
  },
  {
    path: 'poradci',
    loadChildren: () => import('./poradci/poradci.module')
    .then(m => m.PoradciModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
