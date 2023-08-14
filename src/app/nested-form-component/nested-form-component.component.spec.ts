import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormComponentComponent } from './nested-form-component.component';

describe('NestedFormComponentComponent', () => {
  let component: NestedFormComponentComponent;
  let fixture: ComponentFixture<NestedFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedFormComponentComponent]
    });
    fixture = TestBed.createComponent(NestedFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
