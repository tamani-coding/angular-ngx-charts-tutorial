import { Component, OnInit } from '@angular/core';
import { single } from '../data/countries'

@Component({
  selector: 'app-number-card-chart',
  templateUrl: './number-card-chart.component.html',
  styleUrls: ['./number-card-chart.component.css']
})
export class NumberCardChartComponent implements OnInit {

  single: any[];
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';
  
  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
