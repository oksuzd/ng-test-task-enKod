import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import { ToolBarComponent } from "./components/tool-bar/tool-bar.component";
import { CitiesListComponent } from "./components/cities-list/cities-list.component";
import { CitiesGridComponent } from "./components/cities-grid/cities-grid.component";
import { CitiesComponent } from './cities.component';


@NgModule({
  declarations: [
    ToolBarComponent,
    CitiesListComponent,
    CitiesGridComponent,
    CitiesComponent
  ],
  exports: [
    ToolBarComponent,
    CitiesComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class CitiesModule { }
