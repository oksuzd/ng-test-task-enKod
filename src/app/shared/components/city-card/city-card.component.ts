import { Component, Input, OnDestroy } from '@angular/core';
import { City } from "../../../cities/models/city.model";
import { CitiesDataService } from "../../../cities/services/cities-data.service";
import { catchError, Subject, takeUntil, throwError } from "rxjs";

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnDestroy {
  @Input() public city!: City;
  private notifier$: Subject<null> = new Subject();


  constructor(private dataService: CitiesDataService,) {
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  toggleFavorite() {
    this.city.favorite = !this.city.favorite;
    this.dataService.updateCity(this.city)
      .pipe(
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe();
  }

}
