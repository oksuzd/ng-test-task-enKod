import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCardComponent } from "./components/city-card/city-card.component";



@NgModule({
  declarations: [
    CityCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CityCardComponent
  ],
})
export class SharedModule { }
