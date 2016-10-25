import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { StepSearchService } from './step-search.service';
import { Step } from './step';
import {StepsComponent} from './steps.component';
@Component({
  moduleId: module.id,
  selector: 'step-search',
  templateUrl: 'step-search.component.html',
  styleUrls: [ 'step-search.component.css' ],
  providers: [StepSearchService]
})
export class StepSearchComponent implements OnInit {
  steps: Observable<Step[]>;
  public selectedStep: Step;
  private searchTerms = new Subject<string>();
  constructor(
    private StepSearchService: StepSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.steps = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.StepSearchService.search(term)
        // or the observable of empty stepes if no search term
        : Observable.of<Step[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);

        return Observable.of<Step[]>([]);
      });
  }
  onSelect(step: Step): void {
    this.selectedStep = step;
  //  this.gotoDetail();
  }
  clear(): void{
document.getElementById('search-box').value="";
this.search("");


  }
  gotoDetail(step: Step): void {
  //  let link = ['/detail', step.name];
  //  this.router.navigate(link);
  //StepsComponent.selectedStep = step;


  }
}
