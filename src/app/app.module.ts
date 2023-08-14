import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BasicFormComponentComponent } from './basic-form-component/basic-form-component.component';
import { NestedFormComponentComponent } from './nested-form-component/nested-form-component.component';
import { ArrayFormComponentComponent } from './array-form-component/array-form-component.component';
import { ValidFormComponentComponent } from './valid-form-component/valid-form-component.component';
import { SubmitFormComponentComponent } from './submit-form-component/submit-form-component.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponentComponent,
    NestedFormComponentComponent,
    ArrayFormComponentComponent,
    ValidFormComponentComponent,
    SubmitFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
