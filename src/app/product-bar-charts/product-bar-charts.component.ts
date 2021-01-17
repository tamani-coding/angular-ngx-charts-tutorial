import { Component, OnInit } from '@angular/core';
import { productSales, productSalesMulti } from '../data/products'

@Component({
  selector: 'app-product-bar-charts',
  templateUrl: './product-bar-charts.component.html',
  styleUrls: ['./product-bar-charts.component.css']
})
export class ProductBarChartsComponent implements OnInit {

  productSales: any[]
  productSalesMulti: any[]

  view: any[] = [700, 370];

  // options
  legendTitle: string = 'Videogame Genres';
  legendPosition: string = 'below'; // ['right', 'below']
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Sales';
  xAxisLabel: string = 'Genre';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;

  xAxisTicks: any[] = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7']
  yAxisTicks: any[] = [100, 1000, 2000, 5000, 7000, 10000]

  animations: boolean = true;

  showGridLines: boolean = true;
  roundDomains: boolean = true;

  showDataLabel: boolean = true;

  gradient: boolean = false;
  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

  customColors = [
    { "name": "Strategy", "value": "#AAAAAA" },
    { "name": "Shooter", "value": "#AAAAAA" }
  ]

  activeEntries: any[] = ['book']
  barPadding: number = 2
  tooltipDisabled: boolean = false;

  yScaleMax: number = 9000;

  roundEdges: boolean = false;

  constructor() { Object.assign(this, { productSales, productSalesMulti }); }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase()
  }

  formatNumber(input: number): number {
    return input
  }
}
