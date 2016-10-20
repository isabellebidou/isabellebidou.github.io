import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepsComponent }      from './steps.component';
import { StepDetailComponent }  from './step-detail.component';
const routes: Routes = [
{ path: '', redirectTo: '/app.component', pathMatch: 'full' },
  { path: 'detail/:name', component: StepDetailComponent },
  { path: 'steps',     component: StepsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
