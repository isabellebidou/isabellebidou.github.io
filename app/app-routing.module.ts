import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }      from './app.component';
import { StepSearchComponent }      from './step-search.component';
import { StepsComponent }      from './steps.component';

const routes: Routes = [
//{ path: '', redirectTo: './', pathMatch: 'full' },
{ path: '', component: StepSearchComponent },
{ path: 'search', component: StepSearchComponent },
{ path: 'list', component: StepsComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
