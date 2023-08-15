import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-submit-form-component',
  templateUrl: './submit-form-component.component.html',
  styleUrls: ['./submit-form-component.component.scss'],
})
export class SubmitFormComponentComponent implements OnInit {
  options!: FormGroup;
  hideRequiredControl = new FormControl(false, Validators.requiredTrue);
  floatLabelControl = new FormControl(
    'auto' as FloatLabelType,
    Validators.required
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.options = this.fb.group({
      floatLabel: this.floatLabelControl,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        ],
      ],

      age: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.min(18),
          Validators.max(65),
        ],
      ],

      agree: [false, [Validators.requiredTrue]],
    });
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  get firstName() {
    return this.options.get('firstName');
  }

  get lastName() {
    return this.options.get('lastName');
  }

  get gender() {
    return this.options.get('gender');
  }

  get address() {
    return this.options.get('address');
  }

  get country() {
    return this.options.get('country');
  }

  get email() {
    return this.options.get('email');
  }

  get password() {
    return this.options.get('password');
  }

  get age() {
    return this.options.get('age');
  }

  getErrorValue(errorType: string): number | null {
    const errors = this.age?.errors;
    if (!errors || !errors[errorType]) return null;
    return errors[errorType]?.actual;
  }
}
