import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './shared/components/forms/forms.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { AdminComponent } from './features/admin/admin.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { AccountSumaryComponent } from './features/account-sumary/account-sumary.component';
import { PerfilUserComponent } from './layouts/perfil-user/perfil-user.component';
import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    SidebarComponent,
    AccountSumaryComponent,
    PerfilUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
