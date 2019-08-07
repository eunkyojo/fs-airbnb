import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public user: User = new User();

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) { }

  //CRUD for users
  createUser(user: User) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post('http://localhost:8100/api/users/', JSON.stringify(user))
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  getAllUsers(user: User) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get('http://localhost:8100/api/users/')
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  getUserById(userId) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(`http://localhost:8100/api/users/${userId}`)
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  updateUserById(userId, updateUser) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .patch(`http://localhost:8100/api/users/${userId}`, JSON.stringify(updateUser))
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };

  removeUser(userId) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .delete(`http://localhost:8100/api/users/${userId}`)
        .subscribe((response)=>{
          resolve(response)
        })
    })
  };
}
