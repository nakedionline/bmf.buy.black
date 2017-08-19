import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const users = [
      {id: 11, name: 'Mr. T'},
      {id: 12, name: 'Mr. K'},
      {id: 13, name: 'Nico'},
      {id: 14, name: 'Jeff'},
      {id: 15, name: 'Chuck Norris'},
      {id: 16, name: 'Chuck Taylor'},
      {id: 17, name: 'Stella'},
      {id: 18, name: 'Rio'},
      {id: 19, name: 'Dr CEO'},
      {id: 20, name: 'CIO'}
    ]

    return {users};
  }
}
