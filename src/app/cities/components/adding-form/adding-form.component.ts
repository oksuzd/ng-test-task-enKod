import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.scss']
})
export class AddingFormComponent {
  cityForm: FormGroup = this.fb.group({
    name: [ '', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
    description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddingFormComponent>,
  ) {
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
