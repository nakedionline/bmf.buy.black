import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../services/user';
import {UserService} from '../services/user.service';
import {Company} from '../services/company';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{
  users: Company[];
  selectedUser: Company;
  showSearchDiv: boolean = true;
  nameLabel: string = 'Search Service';

  constructor(
    private router: Router,
    private userService: UserService){}

  getUsers(): void {
    //noinspection TypeScriptUnresolvedFunction
    //this.userService.getUsers().then(users => this.users = users);
    this.userService.getUsers().then(users => this.users = users);
  }

  /*add(name:string): void {
    name = name.trim();
    if(!name){return;}
    this.userService.create(name).then(user => {this.users.push(user)});
    this.selectedUser = null;
  }*/

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: Company): void{
    this.selectedUser = user;
  }

  onSearchUser(): void{
    if('Search Service' == this.nameLabel){
      this.nameLabel = 'Done';
      this.showSearchDiv = true;
    }
    else {
      this.nameLabel = 'Search Service';
      this.showSearchDiv = false;

    }
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }
}
