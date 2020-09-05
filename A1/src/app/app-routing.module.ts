import { ChooseRolePageComponent } from './Component/Account/choose-role-page/choose-role-page.component';
import { AdminPageComponent } from './Component/Account/admin-page/admin-page.component';
import { LoginComponent } from './Component/Account/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: '',component: ChooseRolePageComponent},
{path: 'login',component: LoginComponent},
{path:'adminpage', component: AdminPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
