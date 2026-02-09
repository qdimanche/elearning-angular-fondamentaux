import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable, Subscription, tap } from 'rxjs';
import { Person } from '../../models/person';
import { GetAllPersonApplication } from '../../services/get-all-person.application';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-filters-video-games',
  imports: [AsyncPipe],
  templateUrl: './filters-video-games.html',
  styleUrl: './filters-video-games.css',
})
export class FiltersVideoGames implements OnInit, OnDestroy {
  private subcription = new Subscription();
  private readonly peopleService = inject(GetAllPersonApplication);

  people$: Observable<Person[]> = this.peopleService.getAll().pipe(
    filter(items => items.length > 0),
    tap(items => console.info(items))
  );

  people$$ = toSignal(this.people$); // on ne le voit pas mais appel via un effect, et donc appel du subscribe dans cet effect

  ngOnInit(): void {
    const currentSubscription = this.people$.subscribe({
      next: items => {
        console.info(items)
      }
    })
    this.subcription.add(currentSubscription);
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
