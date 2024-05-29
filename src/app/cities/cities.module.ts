import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from "./components/tool-bar/tool-bar.component";
import { CityListComponent } from "./components/city-list/city-list.component";
import { CityGridComponent } from "./components/city-grid/city-grid.component";



@NgModule({
  declarations: [
    ToolBarComponent,
    CityListComponent,
    CityGridComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CitiesModule { }
