import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

//XMLHttpRequest


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(authUser) {
    
    return new Promise((resolve, reject) => {
      // const headers = new HttpHeaders();

      this.http.post(environment.BaseURL + '/api/auth/login', authUser).subscribe((response: any) => {
        console.log(JSON.stringify(response[0].id));
        localStorage.setItem('userId', response[0].id);
        resolve(response);
      });
        (err) => {
          console.log(err);
          reject(err);
        }
    });
  };

  register(authUser) {
    
    return new Promise((resolve, reject) => {
      
      this.http.post(environment.BaseURL + '/api/auth/register', authUser).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('userId', response);
        resolve(response);
      },
        (err) => {
          console.log(err);
          reject(err);
        }
    );
  })
}
}
