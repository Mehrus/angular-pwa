import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {

  objectsArray = [
    {name: 'Script', permissions: {create: false, read: true, update: true, delete: false}},
    {name: 'Props', permissions: {create: false, read: true, update: false, delete: true}},
    {name: 'Scenes', permissions: {create: false, read: true, update: true, delete: true}},
    {name: 'Money', permissions: {create: true, read: false, update: false, delete: true}},
    {name: 'Stunts', permissions: {create: false, read: true, update: true, delete: true}},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
