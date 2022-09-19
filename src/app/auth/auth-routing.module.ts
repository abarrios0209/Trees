import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';

const routes:Routes = [
  {
    path:'',
    children:[
      {
        path:'bienvenida',
        component:BienvenidaComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
      path:'**',
      redirectTo:'bienvenida'
    }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
