import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFormComponentComponent } from './submit-form-component.component';

describe('SubmitFormComponentComponent', () => {
  let component: SubmitFormComponentComponent;
  let fixture: ComponentFixture<SubmitFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitFormComponentComponent]
    });
    fixture = TestBed.createComponent(SubmitFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
