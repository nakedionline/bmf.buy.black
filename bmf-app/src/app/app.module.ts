import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {UserDetailComponent} from './user-details/user-detail.component';
import {UsersComponent} from './user-details/users.component';
import {UserService} from './services/user.service';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dash-board/dashboard.component';
import {HttpModule} from '@angular/http'
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import {LandingComponent} from './landing.component';
import {AboutUsComponent} from './about-us.component';
import {ContactUsComponent} from './contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent,
    LandingComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
