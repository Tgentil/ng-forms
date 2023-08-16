import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-submit-form-component',
  templateUrl: './submit-form-component.component.html',
  styleUrls: ['./submit-form-component.component.scss'],
})
export class SubmitFormComponentComponent implements OnInit {
  myForm!: FormGroup;
  isSubmit = true;
  submitMessage = '';
  hideRequiredControl = new FormControl(false, Validators.requiredTrue);
  floatLabelControl = new FormControl(
    'auto' as FloatLabelType,
    Validators.required
  );

  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
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
    return this.myForm.get('firstName');
  }

  get lastName() {
    return this.myForm.get('lastName');
  }

  get gender() {
    return this.myForm.get('gender');
  }

  get address() {
    return this.myForm.get('address');
  }

  get country() {
    return this.myForm.get('country');
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

  onSubmit() {
    if (this.myForm.valid) {
      this.firestoreService.addUser(this.myForm.value).then(() => {
        this.isSubmit = true;
        this.submitMessage = 'Dados enviados com sucesso!';
      }).catch((error: any) => {
        this.submitMessage = 'Erro ao enviar dados: ' + error.message;
      });
    }
  }


}
