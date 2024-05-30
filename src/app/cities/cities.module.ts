import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import { ToolBarComponent } from "./components/tool-bar/tool-bar.component";
import { CitiesListComponent } from "./components/cities-list/cities-list.component";
import { CitiesGridComponent } from "./components/cities-grid/cities-grid.component";
import { CitiesComponent } from './cities.component';
import { SharedModule } from "../shared/shared.module";
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { MatDialogModule } from "@angular/material/dialog";
import { AddingFormComponent } from './components/adding-form/adding-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    ToolBarComponent,
    CitiesListComponent,
    CitiesGridComponent,
    CitiesComponent,
    DeleteConfirmationComponent,
    AddingFormComponent
  ],
  exports: [
    ToolBarComponent,
    CitiesComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class CitiesModule { }
