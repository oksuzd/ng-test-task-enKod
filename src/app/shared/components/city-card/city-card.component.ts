import { Component, Input, OnDestroy } from '@angular/core';
import { City } from "../../../cities/models/city.model";
import { CitiesDataService } from "../../../cities/services/cities-data.service";
import { catchError, Subject, take, takeUntil, tap, throwError } from "rxjs";
import { CitiesStoreService } from "../../../cities/services/cities-store.service";

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnDestroy {
  @Input() public city!: City;
  private notifier$: Subject<null> = new Subject();


  constructor(
    private dataService: CitiesDataService,
    private dataStore: CitiesStoreService,
  ) {
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  toggleFavorite() {
    const previousFavorite = this.city.favorite;
    this.city.favorite = !this.city.favorite;
    this.dataService.updateCity(this.city)
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => {
          this.city.favorite = previousFavorite;
          return err;
        }))
      )
      .subscribe(() => this.dataStore.updateCity(this.city));
  }

  deleteCity() {
    this.dataService.deleteCity(this.city.id)
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe(() => this.dataStore.deleteCity(this.city.id));
  }
}
