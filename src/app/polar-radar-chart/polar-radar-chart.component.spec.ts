import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarRadarChartComponent } from './polar-radar-chart.component';

describe('PolarRadarChartComponent', () => {
  let component: PolarRadarChartComponent;
  let fixture: ComponentFixture<PolarRadarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarRadarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
