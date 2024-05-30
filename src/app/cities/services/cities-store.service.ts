import { Injectable } from '@angular/core';
import { City } from "../models/city.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitiesStoreService {

  private _cities$: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);

  setCitiesToStore(data: City[]) {
    this._cities$.next(data);
  }

  getCitiesFromStore(): City[] {
    return this._cities$.getValue();
  }
}
