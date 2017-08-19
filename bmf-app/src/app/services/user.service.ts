import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from './user';
import {USERS} from './mock-users';

@Injectable()
export class UserService{
  private headers = new Headers({'Content-Type':'application/json'});
  private usersUrl = 'api/users';

  constructor(private http:Http){}

  getUsers(): Promise<User[]>{
    //return this.http.get(this.usersUrl).toPromise().then(response => response.json().data as User[]).catch(this.handleError);
    return Promise.resolve(USERS);
  } //stub

  create(name:string): Promise<User>{
    return this.http.post(this.usersUrl,JSON.stringify({name: name}),{headers: this.headers}).toPromise().then(res => res.json().data as User).catch(this.handleError);
  }

  update(user: User): Promise<User>{
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put(url,JSON.stringify(user),{headers: this.headers}).toPromise().then(() => user).catch(this.handleError);
  }

  getUsersSlowly(): Promise<User[]>{
    return new Promise(resolve => {
      setTimeout(()=> resolve(this.getUsers()),2000)
    });
  }

  getUser(id: number): Promise<User>{
    return this.getUsers().then(users => users.find(user => user.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
