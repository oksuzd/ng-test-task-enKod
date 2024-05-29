import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CoreModule { }
