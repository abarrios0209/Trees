import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Location } from '@angular/common';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-actividad-fisica',
  templateUrl: './actividad-fisica.component.html',
  styleUrls: ['./actividad-fisica.component.css']
})
export class ActividadFisicaComponent implements OnInit {
  arrayNumber:any[]=[];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public colors:Color[] = [
    {
      backgroundColor:'#A9D178'
    }
  ]
  public barChartLabels: Label[] = ['15 Sep', '16 Sep', '17 Sep', '18 Sep', '19 Sep', '20 Sep'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Steps', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' }
  ];

  constructor(private router:Router,
    private location:Location) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['auth/bienvenida']);
  }

  toBack(){
    this.location.back();
  }
}
