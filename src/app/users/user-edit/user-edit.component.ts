import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';

  constructor() { }

  ngOnInit(): void {
    this.firstName = 'Hugh';
    this.lastName = 'Jackman';
  }

  getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }

}
