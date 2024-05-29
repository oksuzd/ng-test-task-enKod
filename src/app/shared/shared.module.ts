import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CityCardComponent } from "./components/city-card/city-card.component";
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ButtonToggleComponent,
    CityCardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
