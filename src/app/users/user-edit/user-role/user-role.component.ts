import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss'],
})
export class UserRoleComponent implements OnInit {
  objectsArray = [
    {
      name: 'Script',
      permissions: { create: false, read: true, update: true, delete: false },
    },
    {
      name: 'Props',
      permissions: { create: false, read: true, update: false, delete: true },
    },
    {
      name: 'Scenes',
      permissions: { create: false, read: true, update: true, delete: true },
    },
    {
      name: 'Money',
      permissions: { create: true, read: false, update: false, delete: true },
    },
    {
      name: 'Stunts',
      permissions: { create: false, read: true, update: true, delete: true },
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  profileForm = this.fb.group({
    objects: this.fb.array([...this.objectsArray]),
  });

  get objects() {
    return this.profileForm.get('objects') as FormArray;
  }

  addObjects(event: any) {
    let value = '';
    if (event.target.value) {
      value = event.target.value;
    }
    this.objects.push(
      this.fb.control({
        name: value,
        permissions: { create: false, read: false, update: false, delete: false },
      })
    );
  }
}
