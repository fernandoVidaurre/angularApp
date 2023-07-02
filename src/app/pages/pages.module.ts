import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AppRoutingModule} from '../app-routing.module';
import { Pagina404Component } from './pagina404/pagina404.component';




@NgModule({
  declarations: [
    DashboardComponent,
    IntegranteComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    Pagina404Component
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [
    DashboardComponent,
    IntegranteComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    Pagina404Component
  ]
})
export class PagesModule { }
