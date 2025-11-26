import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templetedrivenform } from './templetedrivenform';

describe('Templetedrivenform', () => {
  let component: Templetedrivenform;
  let fixture: ComponentFixture<Templetedrivenform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templetedrivenform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templetedrivenform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
