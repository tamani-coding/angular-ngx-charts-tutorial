import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linear-gauge-chart',
  templateUrl: './linear-gauge-chart.component.html',
  styleUrls: ['./linear-gauge-chart.component.css']
})
export class LinearGaugeChartComponent implements OnInit {

  single: any[];
  view: any[] = [400, 400];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  value: number = 50;
  previousValue: number = 70;
  units: string = 'counts';

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
