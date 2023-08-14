import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFormComponentComponent } from './array-form-component.component';

describe('ArrayFormComponentComponent', () => {
  let component: ArrayFormComponentComponent;
  let fixture: ComponentFixture<ArrayFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayFormComponentComponent]
    });
    fixture = TestBed.createComponent(ArrayFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
