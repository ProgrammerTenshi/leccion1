import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutaComponent } from './components/ruta/ruta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuienessomosComponent,
    RutasComponent,
    RutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
