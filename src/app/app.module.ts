import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RolesAndPermissionsComponent } from './users/roles-and-permissions/roles-and-permissions/roles-and-permissions.component';
import { SettingsComponent } from './users/settings/settings/settings.component';
import { UserEditComponent } from './users/user-edit/user-edit/user-edit.component';
import { UsersListComponent } from './users/users-list/users-list/users-list.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RolesAndPermissionsComponent,
    SettingsComponent,
    UserEditComponent,
    UsersListComponent,
    NavigationComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
