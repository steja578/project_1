import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stockdata } from './stockdata';

describe('Stockdata', () => {
  let component: Stockdata;
  let fixture: ComponentFixture<Stockdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stockdata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stockdata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
