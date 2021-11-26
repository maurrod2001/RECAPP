import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Parrafo1Component } from './componentes/parrafo1/parrafo1.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { ImgcamComponent } from './componentes/imgcam/imgcam.component';
import { FeaturesComponent } from './componentes/features/features.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PrecioComponent } from './paginas/precio/precio.component';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';
import { CaracteristicasComponent } from './paginas/caracteristicas/caracteristicas.component';
import { LocalComponent } from './componentes/local/local.component';
import { VideoComponent } from './componentes/video/video.component';
import { MapComponent } from './componentes/map/map.component';
import { MapandvideoComponent } from './componentes/mapandvideo/mapandvideo.component';
import { FormComponent } from './paginas/form/form.component';
import { Form1Component } from './componentes/form1/form1.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PieComponent,
    Parrafo1Component,
    RedesComponent,
    PreciosComponent,
    ImgcamComponent,
    FeaturesComponent,
    PrincipalComponent,
    PrecioComponent,
    ContactenosComponent,
    CaracteristicasComponent,
    LocalComponent,
    VideoComponent,
    MapComponent,
    MapandvideoComponent,
    FormComponent,
    Form1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
