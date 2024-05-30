import { Injectable } from '@angular/core';
import { City } from "../models/city.model";
import { Observable, of, throwError } from "rxjs";
import { CITIES_LIST } from "../../../assets/mock-data/mock-cities";

@Injectable({
  providedIn: 'root'
})
export class CitiesDataService {
  private storageKey: string = 'Cities';

  // Data emulation on the "server"
  getCities(): Observable<City[]> {
    let cities: City[] = this.getLocalStorageEntities();
    if (cities.length === 0) {
      localStorage.setItem(this.storageKey, JSON.stringify(CITIES_LIST));
      cities = CITIES_LIST;
    }
    return of(cities);
  }

  createCity(city: City): Observable<City> {
    const newCity: City = {
      ...city,
      id: Math.floor(Math.random() * 1000),
      image: 'city-placeholder.jpg',
    };
    const entities: City[] = this.getLocalStorageEntities();
    entities.push(newCity);
    localStorage.setItem(this.storageKey, JSON.stringify(entities));
    return of(newCity);
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

  deleteCity(id: number): Observable<boolean> {
    let cities: City[] = this.getLocalStorageEntities();
    const initialLength: number = cities.length;
    cities = cities.filter(city => city.id !== id);
    if (cities.length === initialLength) {
      return throwError(() => new Error('City not found or could not be deleted'));
    }
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
