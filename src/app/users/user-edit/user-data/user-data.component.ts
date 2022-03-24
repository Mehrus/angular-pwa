import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  file: any;
  dragging = false;

  profileForm = new FormGroup({
    firstName: new FormControl('Hugh'),
    lastName: new FormControl('Jackman'),
    birthday: new FormControl(new Date('12/10/1968')),
    uploadImage: new FormControl(''),
    citizenship: new FormControl('citizenship'),
    instagram: new FormControl('@thehughjackman'),
    email: new FormControl('nothugh@example.com'),
    twitter: new FormControl('@RealHughJackman'),
    facebook: new FormControl('@HughJackman'),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  getFile(e: any) {
    this.file = e.target.files[0];
  }

  onDragEnter() {
    this.dragging = true;
  }

  onDragLeave() {
    this.dragging = false;
  }

}
