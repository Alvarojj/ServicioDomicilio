import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from './componentes/principal/principal.component'
import {CartaComponent} from './componentes/carta/carta.component';
import {  SopaComponent} from "./componentes/sopa/sopa.component"; 
import { JugosComponent } from "./componentes/jugos/jugos.component";
import { GaseosasComponent } from "./componentes/gaseosas/gaseosas.component";

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'menu',
    component: CartaComponent
  },
  {
    path: 'sopa',
    component: SopaComponent
  },
  {
    path: 'jugos',
    component: JugosComponent
  },
  {
    path: 'gaseosas',
    component: GaseosasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
