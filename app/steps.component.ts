import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Step } from './step';
import { StepService } from './step.service';

@Component({
  moduleId: module.id,
  selector: 'my-steps',
  templateUrl: 'steps.component.html',
  styleUrls: [ 'steps.component.css' ]
})
export class StepsComponent implements OnInit {
  steps: Step[];
  public selectedStep: Step;

  constructor(
    private router: Router,
    private stepService: StepService) { }

  getSteps(): void {
    this.stepService.getSteps().then(steps => this.steps = steps);
    
  }

  ngOnInit(): void {
    this.getSteps();
  }

  onSelect(step: Step): void {
    this.selectedStep = step;
  //  this.gotoDetail();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStep.name]);
  }




}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
