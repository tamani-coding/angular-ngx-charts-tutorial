import { Component, OnInit } from '@angular/core';
import { multi } from '../data/line-chart-data';

@Component({
  selector: 'app-line-area-charts',
  templateUrl: './line-area-charts.component.html',
  styleUrls: ['./line-area-charts.component.css']
})
export class LineAreaChartsComponent implements OnInit {

  constructor() {
    Object.assign(this, { multi });
  }

  public multi: any[];
  public view: any[] = [700, 300];

  // options
  public legend: boolean = true;
  public showLabels: boolean = true;
  public animations: boolean = true;
  public xAxis: boolean = true;
  public yAxis: boolean = true;
  public showYAxisLabel: boolean = true;
  public showXAxisLabel: boolean = true;
  public xAxisLabel: string = 'Year';
  public yAxisLabel: string = 'Population';
  public timeline: boolean = true;

  public colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  public onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
