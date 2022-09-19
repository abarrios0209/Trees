import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pasos:number = 40;
  arboles:number= 2;
  cycling:number = 10;

  public doughnutChartLabels: Label[] = [ 'Walking','Trees','Cycling',];
  public doughnutChartData: MultiDataSet = [
    [this.pasos,this.arboles,this.cycling]
  ]

  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {
      backgroundColor:[
        '#00695B',
        '#8CC34B',
      ]
    }
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.contadorPasos();
  }

  contadorPasos(){
    setInterval(() => {
      this.pasos = this.pasos +1;
      this.doughnutChartData[0][0] = this.pasos;
      if(this.pasos%5 === 0){
        this.arboles= this.arboles+1;
        this.doughnutChartData[0][1] = this.arboles;
      }
    },3000)
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['auth/bienvenida']);
  }

  redirecCharts(){
    this.router.navigate(['home/actividadFisica']);
  }
}
