import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AddingFormComponent } from "../adding-form/adding-form.component";
import { CitiesDataService } from "../../services/cities-data.service";
import { CitiesStoreService } from "../../services/cities-store.service";
import { City } from "../../models/city.model";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {

  @Output() public newCity = new EventEmitter<City>();

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) {
  }

  addCity(): void {
    const dialogRef: MatDialogRef<AddingFormComponent> = this.dialog.open(AddingFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.newCity.emit(result);
      }
    });
  }

  navigateTo(view: string) {
    this.router.navigate([view]);
  }
}
