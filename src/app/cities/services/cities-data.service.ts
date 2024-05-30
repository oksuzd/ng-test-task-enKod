import { Injectable } from '@angular/core';
import { City } from "../models/city.model";
import { Observable, of, throwError } from "rxjs";
import { CITIES_LIST } from "../mock-data/mock-cities";

@Injectable({
  providedIn: 'root'
})
export class CitiesDataService {
  private storageKey: string = 'Cities';

  getCities(): Observable<City[]> {
    let cities: City[] = this.getLocalStorageEntities();
    if (cities.length === 0) {
      localStorage.setItem(this.storageKey, JSON.stringify(CITIES_LIST));
      cities = CITIES_LIST;
    }
    return of(cities);
  }

  updateCity(updatedCity: City): Observable<boolean> {
    const cities: City[] = this.getLocalStorageEntities();
    const index = cities.findIndex(city => city.id === updatedCity.id);
    if (index === -1) {
      return throwError(() => new Error('City not found'));
    }
    cities[index] = updatedCity;
    localStorage.setItem(this.storageKey, JSON.stringify(cities));
    return of(true);
  }

  private getLocalStorageEntities(): City[] {
    const entitiesJSON: string | null = localStorage.getItem(this.storageKey);
    if (!entitiesJSON) {
      return [];
    }
    try {
      return JSON.parse(entitiesJSON);
    } catch (e) {
      throwError(() => new Error('Invalid storage data'));
      return [];
    }
  }
}
