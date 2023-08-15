import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Component-Forms imports
import { BasicFormComponentComponent } from './basic-form-component/basic-form-component.component';
import { NestedFormComponentComponent } from './nested-form-component/nested-form-component.component';
import { ArrayFormComponentComponent } from './array-form-component/array-form-component.component';
import { ValidFormComponentComponent } from './valid-form-component/valid-form-component.component';
import { SubmitFormComponentComponent } from './submit-form-component/submit-form-component.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material imports
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';

import { FormsModule } from '@angular/forms';


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
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
