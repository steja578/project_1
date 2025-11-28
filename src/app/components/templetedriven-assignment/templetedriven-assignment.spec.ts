import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletedrivenAssignment } from './templetedriven-assignment';

describe('TempletedrivenAssignment', () => {
  let component: TempletedrivenAssignment;
  let fixture: ComponentFixture<TempletedrivenAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempletedrivenAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletedrivenAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
