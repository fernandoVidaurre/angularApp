import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent} from './pages/servicios/servicios.component';
import { QuienesSomosComponent} from './pages/quienes-somos/quienes-somos.component';
import { DashboardComponent} from './pages/dashboard/dashboard.component';
import { Pagina404Component} from './pages/pagina404/pagina404.component';
import { IntegranteComponent } from './pages/integrante/integrante.component';


const routes: Routes = [
  {path:'servicios', component: ServiciosComponent},
  {path:'quienes-somos', component: QuienesSomosComponent},
  {path: 'quienes-somos/:id', component: IntegranteComponent},
  {path:'home', component: DashboardComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
