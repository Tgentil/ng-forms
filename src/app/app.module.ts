import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicFormComponentComponent } from './basic-form-component/basic-form-component.component';
import { NestedFormComponentComponent } from './nested-form-component/nested-form-component.component';
import { ArrayFormComponentComponent } from './array-form-component/array-form-component.component';
import { ValidFormComponentComponent } from './valid-form-component/valid-form-component.component';
import { SubmitFormComponentComponent } from './submit-form-component/submit-form-component.component';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
