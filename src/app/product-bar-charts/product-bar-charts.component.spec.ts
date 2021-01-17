import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBarChartsComponent } from './product-bar-charts.component';

describe('ProductBarChartsComponent', () => {
  let component: ProductBarChartsComponent;
  let fixture: ComponentFixture<ProductBarChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBarChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBarChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
