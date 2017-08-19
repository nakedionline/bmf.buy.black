import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent }       from './user-details/users.component';
import { UserDetailComponent }  from './user-details/user-detail.component';
import {DashboardComponent}     from './dash-board/dashboard.component';
import {LandingComponent}       from './landing.component';
import {AboutUsComponent}       from './about-us.component';
import {ContactUsComponent} from "./contact-us.component";

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing',    component: LandingComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'users',      component: UsersComponent },
  { path: 'about',      component: AboutUsComponent },
  {path: 'contact',     component: ContactUsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
