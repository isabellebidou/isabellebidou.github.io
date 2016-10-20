import { Step } from './step';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class StepService {


  private stepsUrl = 'app/steps';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getSteps(): Promise<Step[]> {
    return this.http.get(this.stepsUrl)
               .toPromise()
               .then(response => response.json().data as Step[])
               .catch(this.handleError);
  }

  getStepsSlowly(): Promise<Step[]> {
    return new Promise<Step[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getSteps());
  }

  getStep(name: string): Promise<Step> {
    return this.getSteps()
               .then(steps => steps.find(step => step.name === name));
  }
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

update(step: Step): Promise<Step> {
  const url = `${this.stepsUrl}/${step.name}`;
  return this.http
    .put(url, JSON.stringify(step), {headers: this.headers})
    .toPromise()
    .then(() => step)
    .catch(this.handleError);
}
create(name: string): Promise<Step> {
  return this.http
    .post(this.stepsUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}
delete(name: string): Promise<void> {
  const url = `${this.stepsUrl}/${name}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}


}
