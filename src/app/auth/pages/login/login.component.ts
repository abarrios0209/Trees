import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup =new FormGroup({})
  ocultarMostrarPassword = 'password';
  showEnableBtnPwd: boolean = false;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private location:Location,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.datosFormulario();
  }

  datosFormulario(){
    this.login = this.formBuilder.group({
      user:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    })
  }

  cambiarTipo(): void {
    if (this.ocultarMostrarPassword === 'password') {
      this.ocultarMostrarPassword = 'text';
      this.showEnableBtnPwd = true;
    } else {
      this.ocultarMostrarPassword = 'password';
      this.showEnableBtnPwd = false;
    }
  }

  toBack(){
    this.location.back();
  }

  redirectHome(){
    if(this.login.valid){
      if(this.login.value.user === "prueba@heippi.com" && this.login.value.password === "$TecPass05"){
        localStorage.setItem('token','true')
        this.router.navigate(['home/principal'])
      }else{
        this.toastr.error('Wrong username or password')
      }
    }
  }

}
