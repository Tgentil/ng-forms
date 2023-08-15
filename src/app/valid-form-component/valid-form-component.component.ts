import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-form-component',
  templateUrl: './valid-form-component.component.html',
  styleUrls: ['./valid-form-component.component.scss'],
})
export class ValidFormComponentComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      ]],

      age: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(65),
      ]],

      agree: [false, [
        Validators.requiredTrue
      ]],
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

  getErrorValue(errorType: string): number | null {
    const errors = this.age?.errors;
    if (!errors || !errors[errorType]) return null;
    return errors[errorType]?.actual;
  }
}
