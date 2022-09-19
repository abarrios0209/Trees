import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  imageTree ='assets/images/treeWolcon.png'
  colorButton= "#8BC34A"

  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.imageTree)
  }

  redirecLogin(){
    console.log('entro')
    this.router.navigate(['auth/login'])
  }

}
