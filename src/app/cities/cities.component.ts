import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, Subject, take, takeUntil, throwError } from "rxjs";
import { CitiesDataService } from "./services/cities-data.service";
import { CitiesStoreService } from "./services/cities-store.service";
import { City } from "./models/city.model";


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent implements OnInit, OnDestroy {

  private notifier$: Subject<null> = new Subject();

  constructor(
    private dataService: CitiesDataService,
    private dataStore: CitiesStoreService,
  ) {}

  ngOnInit() {
    this.createSubscription();
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  onDataReceived(data: City) {
    this.createNewCity(data);
  }

  private createNewCity(city: City) {
    this.dataService.createCity(city)
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe((result: City) => this.dataStore.addCity(result));
  }

  private createSubscription() {
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
