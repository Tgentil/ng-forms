import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormComponentComponent } from './basic-form-component.component';

describe('BasicFormComponentComponent', () => {
  let component: BasicFormComponentComponent;
  let fixture: ComponentFixture<BasicFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFormComponentComponent]
    });
    fixture = TestBed.createComponent(BasicFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
