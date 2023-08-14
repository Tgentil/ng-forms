import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidFormComponentComponent } from './valid-form-component.component';

describe('ValidFormComponentComponent', () => {
  let component: ValidFormComponentComponent;
  let fixture: ComponentFixture<ValidFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidFormComponentComponent]
    });
    fixture = TestBed.createComponent(ValidFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
