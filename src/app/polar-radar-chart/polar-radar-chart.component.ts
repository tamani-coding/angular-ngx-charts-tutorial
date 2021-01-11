import { Component, OnInit } from '@angular/core';
import { multi } from '../data/countries';

@Component({
  selector: 'app-polar-radar-chart',
  templateUrl: './polar-radar-chart.component.html',
  styleUrls: ['./polar-radar-chart.component.css']
})
export class PolarRadarChartComponent implements OnInit {
  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
