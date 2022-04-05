import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { MaterialDialog } from './dialog/material-dialog';
import { UpdateUserDataService } from './update-user-data.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';

  constructor(public dialog: MatDialog, private updateUserDataService: UpdateUserDataService) { }

  ngOnInit(): void {
    this.firstName = 'Hugh';
    this.lastName = 'Jackman';
  }

  getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MaterialDialog, {
      width: '250px',
      panelClass: 'custom-modal'
    });
  }

  submitUserData(event: any) {
    console.log(event);
    this.updateUserDataService.updateUserData(event);
    this.firstName = event.form.firstName;
    this.lastName = event.form.lastName;
  }

  eventsSubject: Subject<void> = new Subject<void>();

  emitEventToChild() {
    this.eventsSubject.next();
  }

}
