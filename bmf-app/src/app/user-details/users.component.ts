import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../services/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: User[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService){}

  getUsers(): void {
    //noinspection TypeScriptUnresolvedFunction
    //this.userService.getUsers().then(users => this.users = users);
    this.userService.getUsers().then(users => this.users = users);
  }

  add(name:string): void {
    name = name.trim();
    if(!name){return;}
    this.userService.create(name).then(user => {this.users.push(user)});
    this.selectedUser = null;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void{
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }
}
