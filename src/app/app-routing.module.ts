import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users-list', loadChildren: () => import('./users/users-list/users-list.module').then(m => m.UsersListModule)},
  { path: 'user-edit', loadChildren: () => import('./users/user-edit/user-edit.module').then(m => m.UserEditModule) },
  { path: 'settings', loadChildren: () => import('./users/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'roles-and-permissions', loadChildren: () => import('./users/roles-and-permissions/roles-and-permissions.module').then(m => m.RolesAndPermissionsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
