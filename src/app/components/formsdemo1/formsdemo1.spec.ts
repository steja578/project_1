import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formsdemo1 } from './formsdemo1';

describe('Formsdemo1', () => {
  let component: Formsdemo1;
  let fixture: ComponentFixture<Formsdemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formsdemo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formsdemo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
