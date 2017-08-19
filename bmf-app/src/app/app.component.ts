import { Component} from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './landing.component.html',

 // styleUrls: ['./app.component.css']
/*  template: `
  <h1>{{title}}</h1>
   <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/users" routerLinkActive="active">Members</a>
  </nav>
  <router-outlet></router-outlet>`,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Create User';
  fullLogoImagePath: string;

  constructor(){
    this.fullLogoImagePath = 'images/logo.png';
  }

}
