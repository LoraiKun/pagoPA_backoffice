import { Injectable } from '@angular/core';
import { LoginBody, LoginResponse } from '../../models/auth';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // constructor(private http: HttpClient) {}

  logIn(loginBody: LoginBody): Observable<LoginResponse> {
    let authorized: boolean = false;
    RegistredUsers.forEach((user) => {
      if (
        user.email == loginBody.email &&
        user.password == loginBody.password
      ) {
        authorized = true;
      }
    });
    if (authorized) {
      return of(TOKEN);
    } else {
      return throwError(() => new Error('Simulated API failure'));
    }
  }

  getPassword(email: string): Observable<string> {
    let authorized: boolean = false;
    let password!: string;
    RegistredUsers.forEach((user) => {
      if (user.email == email) {
        authorized = true;
        password = user.password;
      }
    });

    if (authorized) {
      return of(password);
    } else {
      return throwError(() => new Error('Simulated API failure'));
    }
  }
}

const RegistredUsers = [
  {
    email: 'lorenzo.dettori@nvgroup.it',
    password: '123456Qwerty!',
  },
];

const TOKEN: LoginResponse = { token: 'this token' };
