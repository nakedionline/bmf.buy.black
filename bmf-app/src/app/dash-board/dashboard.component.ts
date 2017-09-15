import { Component, OnInit } from '@angular/core';

//import { User } from '../services/user';
import {Company} from '../services/company';
import { UserService } from '../services/user.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
 styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  users: Company[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .then(users => this.users = users.slice(1, 5));
  }
}
