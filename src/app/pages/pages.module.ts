import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AppRoutingModule} from '../app-routing.module';




@NgModule({
  declarations: [
    DashboardComponent,
    IntegranteComponent,
    QuienesSomosComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [
    DashboardComponent,
    IntegranteComponent,
    QuienesSomosComponent,
    ServiciosComponent
  ]
})
export class PagesModule { }
