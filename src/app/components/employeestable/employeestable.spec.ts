import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeestable } from './employeestable';

describe('Employeestable', () => {
  let component: Employeestable;
  let fixture: ComponentFixture<Employeestable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeestable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeestable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
