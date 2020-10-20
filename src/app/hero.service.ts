import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  }
}
