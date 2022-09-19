import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material.module';
import { ActividadFisicaComponent } from './actividad-fisica/actividad-fisica.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomeComponent,
    ActividadFisicaComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ChartsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class PagesModule { }
