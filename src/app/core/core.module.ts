import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
