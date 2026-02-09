import { inject, Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Person } from '../models/person';
import { OnePersonApiResult, PeopleApiResult } from './models';
import { GetAllPeople } from './get-all-people';

@Injectable({
  providedIn: 'root',
})
export class GetAllPersonApplication {
  private readonly infra = inject(GetAllPeople)

  getAll(): Observable<Person[]> {
    return this.infra.getAll().pipe(
      map(result => result.results.map((item: OnePersonApiResult) => ({ id: +item.uid, surname: item.name }))) // operator : appelé à chaque next dans l'Observable
    )
  }
}
