import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineAreaChartsComponent } from './line-area-charts/line-area-charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { PieChartsComponent } from './pie-charts/pie-charts.component';
import { HeatMapChartComponent } from './heat-map-chart/heat-map-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineAreaChartsComponent,
    BarChartsComponent,
    PieChartsComponent,
    HeatMapChartComponent,
    GaugeChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
