import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModel } from './my-model';

describe('MyModel', () => {
  let component: MyModel;
  let fixture: ComponentFixture<MyModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
