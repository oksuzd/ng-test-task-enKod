import { Injectable } from '@angular/core';
import { City } from "../models/city.model";
import { BehaviorSubject, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitiesStoreService {
  /**
   BehaviorSubject is used, laying down the potential need for tracking data changes in various places in the application
   */
  private _cities$: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);

  setCitiesToStore(data: City[]) {
    this._cities$.next(data);
  }

  getCitiesFromStore(): City[] {
    return this._cities$.getValue();
  }

  updateCity(updatedCity: City) {
    const cities: City[] = this.getCitiesFromStore();
    const index = cities.findIndex(city => city.id === updatedCity.id);
    if (index === -1) {
      throwError(() => new Error('City not found'));
    } else {
      cities[index] = updatedCity;
      this._cities$.next([...cities]);
    }
  }
}
