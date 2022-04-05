import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'material-dialog',
  templateUrl: 'material-dialog.html',
})
export class MaterialDialog {
  constructor(public dialogRef: MatDialogRef<MaterialDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}