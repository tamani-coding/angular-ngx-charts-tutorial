import { productSales } from './../data/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-map-chart',
  templateUrl: './tree-map-chart.component.html',
  styleUrls: ['./tree-map-chart.component.css']
})
export class TreeMapChartComponent implements OnInit {

  productSales: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = false;
  animations: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { productSales });
  }

  onSelect(event) {
    console.log(event);
  }

  labelFormatting(c) {
    return `${(c.label)} Sales`;
  }

  ngOnInit(): void {
  }

}
