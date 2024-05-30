import { Component, OnDestroy, OnInit } from '@angular/core';
import { City } from "../../models/city.model";
import { CitiesStoreService } from "../../services/cities-store.service";
import { catchError, Subject, take, takeUntil, throwError } from "rxjs";
import { CitiesDataService } from "../../services/cities-data.service";


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit, OnDestroy {
  cities: City[] = [];
  private notifier$: Subject<null> = new Subject();

  constructor(private dataStore: CitiesStoreService) {
  }

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
