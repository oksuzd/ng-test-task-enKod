import { Component, OnDestroy, OnInit } from '@angular/core';
import { City } from "../../models/city.model";
import { CitiesStoreService } from "../../services/cities-store.service";
import { catchError, Subject, takeUntil, throwError } from "rxjs";

@Component({
  selector: 'app-cities-grid',
  templateUrl: './cities-grid.component.html',
  styleUrls: ['./cities-grid.component.scss']
})
export class CitiesGridComponent implements OnInit, OnDestroy{
  cities: City[] = []
  private notifier$: Subject<null> = new Subject();

  constructor( private dataStore: CitiesStoreService ) {}

  ngOnInit() {
    this.createSubscription();
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  createSubscription() {
    this.dataStore.cities$
      .pipe(
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe((res) => this.cities = res);
  }
}
