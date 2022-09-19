import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActividadFisicaComponent } from './actividad-fisica/actividad-fisica.component';

const routes:Routes = [
  {
    path:'',
    children:[
      {
        path:'principal',
        component:HomeComponent
      },
      {
        path:'actividadFisica',
        component:ActividadFisicaComponent
      },
      {
        path:'**',
        redirectTo:'home'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
