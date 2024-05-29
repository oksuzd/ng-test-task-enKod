import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./core/components/header/header.component";
import { CitiesModule } from "./cities/cities.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
