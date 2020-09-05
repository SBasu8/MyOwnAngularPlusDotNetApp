
import { ViewComponent } from './Component/view/view.component';
import { AuthService } from './Services/auth.service';
import { AuthInterceptorService } from './Services/auth-interceptor.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChooseRolePageComponent } from './Component/Account/choose-role-page/choose-role-page.component';
import { LoginComponent } from './Component/Account/login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AdminPageComponent } from './Component/Account/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseRolePageComponent,
    LoginComponent,
    ViewComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
