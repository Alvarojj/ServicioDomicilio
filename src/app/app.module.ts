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
import { HeladosComponent } from './componentes/helados/helados.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    CartaComponent,
    SopaComponent,
    JugosComponent,
    GaseosasComponent,
    MiCarritoComponent,
    HeladosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
