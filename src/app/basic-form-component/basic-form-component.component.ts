import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form-component',
  templateUrl: './basic-form-component.component.html',
  styleUrls: ['./basic-form-component.component.scss'],
})
export class BasicFormComponentComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: 'default message',
      career: '',
    });
    this.myForm.valueChanges.subscribe(console.log)
  }
}
