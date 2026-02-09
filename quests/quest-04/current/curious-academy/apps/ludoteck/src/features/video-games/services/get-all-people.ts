import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleApiResult } from './models';
import { environment } from 'apps/ludoteck/src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GetAllPeople {
  private readonly http = inject(HttpClient);

  getAll(): Observable<PeopleApiResult> {

    /*     return new Observable(subscriber => {
          setTimeout(() => {
    
            const result: PeopleApiResult = {
              results: [{
                name: 'Test1',
                uid: '1'
              },
              {
                name: 'Test2',
                uid: '2'
              }
              ]
            }
    
            subscriber.next(result);
          }, 1500)
    
    
          setTimeout(() => {
            const result: PeopleApiResult = {
              results: [{
                name: 'Test10',
                uid: '1'
              },
              {
                name: 'Test20',
                uid: '20'
              }
              ]
            }
    
            subscriber.next(result);
          }, 2500)
    
        }) */

    return this.http.get<PeopleApiResult>(environment.apis.person.url)
  }
}
