import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPieChartsComponent } from './product-pie-charts.component';

describe('ProductPieChartsComponent', () => {
  let component: ProductPieChartsComponent;
  let fixture: ComponentFixture<ProductPieChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPieChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPieChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
