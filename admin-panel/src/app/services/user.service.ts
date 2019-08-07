import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor() { 
    this.users = [
      {
        name: 'Euna',
        lastName: 'Jo',
        email: 'euna@mail.com',
        cellPhone: 123456789
      },
      {
        name: 'Hannah',
        lastName: 'Montana',
        email: 'hannah@mail.com',
        cellPhone: 123456780
      },
      {
        name: 'Harvey',
        lastName: 'Spector',
        email: 'harvey@mail.com',
        cellPhone: 123456781
      }
    ];
  }

  getUsers(): Array<User> {
    return this.users;
  }
}
