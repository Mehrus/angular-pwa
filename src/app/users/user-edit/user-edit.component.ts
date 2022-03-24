import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialDialog } from './dialog/material-dialog';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firstName = 'Hugh';
    this.lastName = 'Jackman';
  }

  getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  openDialog(): void {
    console.log('open dialog');
    const dialogRef = this.dialog.open(MaterialDialog, {
      width: '250px',
      panelClass: 'custom-modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
