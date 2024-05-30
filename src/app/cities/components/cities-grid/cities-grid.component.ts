import { Component } from '@angular/core';
import { City } from "../../models/city.model";
import { CitiesStoreService } from "../../services/cities-store.service";

@Component({
  selector: 'app-cities-grid',
  templateUrl: './cities-grid.component.html',
  styleUrls: ['./cities-grid.component.scss']
})
export class CitiesGridComponent {
  cities: City[] = this.dataStore.getCitiesFromStore();

  constructor( private dataStore: CitiesStoreService ) {}
}
