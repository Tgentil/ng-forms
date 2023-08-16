import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponentComponent } from './basic-form-component/basic-form-component.component';
import { NestedFormComponentComponent } from './nested-form-component/nested-form-component.component';
import { ArrayFormComponentComponent } from './array-form-component/array-form-component.component';
import { ValidFormComponentComponent } from './valid-form-component/valid-form-component.component';
import { SubmitFormComponentComponent } from './submit-form-component/submit-form-component.component';

const routes: Routes = [
  { path: 'basic-form', component: BasicFormComponentComponent },
  { path: 'nested-form', component: NestedFormComponentComponent },
  { path: 'array-form', component: ArrayFormComponentComponent },
  { path: 'valid-form', component: ValidFormComponentComponent },
  { path: 'submit-form', component: SubmitFormComponentComponent },
  { path: '', redirectTo: '/submit-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
