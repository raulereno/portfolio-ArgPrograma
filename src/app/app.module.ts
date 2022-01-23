import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PortadaComponent,
    SobreMiComponent,
    ResumenComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
