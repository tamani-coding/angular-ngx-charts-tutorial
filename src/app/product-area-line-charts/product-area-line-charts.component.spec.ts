import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAreaLineChartsComponent } from './product-area-line-charts.component';

describe('ProductAreaLineChartsComponent', () => {
  let component: ProductAreaLineChartsComponent;
  let fixture: ComponentFixture<ProductAreaLineChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAreaLineChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAreaLineChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
