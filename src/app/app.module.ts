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
import { AllAccountsSecComponent } from './layouts/all-accounts-sec/all-accounts-sec.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultistepFormComponent } from './shared/components/multistep-form/multistep-form.component';
import { UserService } from './core/services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    AllAccountsSecComponent,
    RegisterComponent,
    MultistepFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
