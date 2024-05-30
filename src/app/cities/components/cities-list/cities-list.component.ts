import { Component } from '@angular/core';
import { City } from "../../models/city.model";
import { CitiesStoreService } from "../../services/cities-store.service";


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent {
  cities: City[] = this.dataStore.getCitiesFromStore();

  constructor( private dataStore: CitiesStoreService ) {}
}
