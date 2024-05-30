import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { City } from "../../models/city.model";
import { CitiesStoreService } from "../../services/cities-store.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-cities-grid',
  templateUrl: './cities-grid.component.html',
  styleUrls: ['./cities-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesGridComponent implements OnInit {
  cities$: Observable<City[]> | undefined;

  constructor(private dataStore: CitiesStoreService) {}

  ngOnInit() {
    this.cities$ = this.dataStore.cities$;
  }
}
