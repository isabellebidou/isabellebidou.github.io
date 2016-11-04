import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Step }           from './step';
@Injectable()
export class StepSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Step[]> {
    return this.http
               .get(`app/steps/?name=${term}`)
            //https://api.myjson.com/bins/sn84
          //  .get(`http://api.myjson.com/bins/sn84/?name=${term}`)

               .map((r: Response) => r.json().data as Step[]);
  }
}
