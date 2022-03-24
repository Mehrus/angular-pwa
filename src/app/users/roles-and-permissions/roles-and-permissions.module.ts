import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesAndPermissionsRoutingModule } from './roles-and-permissions-routing.module';
import { RolesAndPermissionsComponent } from './roles-and-permissions.component';


@NgModule({
  declarations: [
    RolesAndPermissionsComponent
  ],
  imports: [
    CommonModule,
    RolesAndPermissionsRoutingModule
  ]
})
export class RolesAndPermissionsModule { }
