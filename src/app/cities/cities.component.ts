import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, Subject, take, takeUntil, throwError } from "rxjs";
import { CitiesDataService } from "./services/cities-data.service";
import { CitiesStoreService } from "./services/cities-store.service";


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit, OnDestroy {
  private notifier$: Subject<null> = new Subject();

  constructor(
    private dataService: CitiesDataService,
    private dataStore: CitiesStoreService,
  ) {
  }

  ngOnInit() {
    this.createSubscription();
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  createSubscription() {
    this.dataService.getCities()
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe((data) => {
        this.dataStore.setCitiesToStore(data);
      });
  }
}
