import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExamplesComponent } from './my-examples.component';

describe('MyExamplesComponent', () => {
  let component: MyExamplesComponent;
  let fixture: ComponentFixture<MyExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
