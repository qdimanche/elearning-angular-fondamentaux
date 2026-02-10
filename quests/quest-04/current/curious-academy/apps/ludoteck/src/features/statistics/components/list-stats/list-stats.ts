import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { StatList } from '../../models';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-stats',
  imports: [AsyncPipe],
  templateUrl: './list-stats.html',
  styleUrl: './list-stats.css',
})
export class ListStats implements OnInit {
  private readonly route = inject(ActivatedRoute);
  protected readonly stats$ = this.route.data.pipe(
    map<{ [key: string | symbol]: any }, StatList>(data => data['stats']));

  protected readonly title$ = this.route.data.pipe(
    map<{ [key: string | symbol]: any }, string>(data => data['title']));

  protected readonly colorTitle$ = this.route.data.pipe(
    map<{ [key: string | symbol]: any }, string>(data => data['colorTitle']));

  ngOnInit(): void {
    this.stats$.subscribe({
      next: item => {
        console.info(item)
      }
    })
  }

}