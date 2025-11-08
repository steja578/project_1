import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAssignment } from './product-assignment';

describe('ProductAssignment', () => {
  let component: ProductAssignment;
  let fixture: ComponentFixture<ProductAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
