import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CartaComponent } from './componentes/carta/carta.component';
import { SopaComponent } from './componentes/sopa/sopa.component';
import { JugosComponent } from './componentes/jugos/jugos.component';
import { GaseosasComponent } from './componentes/gaseosas/gaseosas.component';
import { MiCarritoComponent } from './componentes/mi-carrito/mi-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    CartaComponent,
    SopaComponent,
    JugosComponent,
    GaseosasComponent,
    MiCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
