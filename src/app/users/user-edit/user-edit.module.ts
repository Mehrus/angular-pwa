import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { PrimaryButtonComponent } from 'src/app/parts/primary-button/primary-button.component';
import { MaterialDialog } from './dialog/material-dialog';


@NgModule({
  declarations: [
    UserEditComponent,
    MaterialDialog,
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule,
    UserEditRoutingModule
  ]
})
export class UserEditModule { }
