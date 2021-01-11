import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatMapChartComponent } from './heat-map-chart.component';

describe('HeatMapChartComponent', () => {
  let component: HeatMapChartComponent;
  let fixture: ComponentFixture<HeatMapChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatMapChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatMapChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
