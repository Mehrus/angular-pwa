import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { PrimaryButtonComponent } from 'src/app/parts/primary-button/primary-button.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserEditComponent,
    PrimaryButtonComponent,
    UserRoleComponent,
  ],
  imports: [
    CommonModule,
    UserEditRoutingModule,
    MatTabsModule,
    ReactiveFormsModule 
  ]
})
export class UserEditModule { }
