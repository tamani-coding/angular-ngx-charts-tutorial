import { Component, OnInit } from '@angular/core';
import { productSales, productSalesMulti } from '../data/products';

@Component({
  selector: 'app-product-pie-charts',
  templateUrl: './product-pie-charts.component.html',
  styleUrls: ['./product-pie-charts.component.css']
})
export class ProductPieChartsComponent implements OnInit {

  productSales: any[]
  productSalesMulti: any[]

  view: any[] = [700, 370];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  constructor() { Object.assign(this, { productSales, productSalesMulti }) }

  ngOnInit(): void {
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
