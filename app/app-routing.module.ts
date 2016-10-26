import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }      from './app.component';
import { StepDetailComponent }  from './step-detail.component';
const routes: Routes = [
{ path: '', redirectTo: './app.component', pathMatch: 'full' },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
