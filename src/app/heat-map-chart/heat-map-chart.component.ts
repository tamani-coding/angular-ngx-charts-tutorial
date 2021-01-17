import { Component, OnInit } from '@angular/core';
import { productSalesMulti } from '../data/products';

@Component({
  selector: 'app-heat-map-chart',
  templateUrl: './heat-map-chart.component.html',
  styleUrls: ['./heat-map-chart.component.css']
})
export class HeatMapChartComponent implements OnInit {

  productSalesMulti: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'product';
  yAxisLabel: string = 'sales';

  colorScheme = {
    domain: ['#fc88ab', '#fc6d98', '#ff477f', '#ff3371', '#ff2165', '#ff004e']
  };

  constructor() {
    Object.assign(this, { productSalesMulti });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
  }

}
