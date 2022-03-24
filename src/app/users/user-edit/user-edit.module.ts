import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { PrimaryButtonComponent } from 'src/app/parts/primary-button/primary-button.component';


@NgModule({
  declarations: [
    UserEditComponent,
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule,
    UserEditRoutingModule
  ]
})
export class UserEditModule { }
