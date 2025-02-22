import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://storley.herokuapp.com';
// const AUTH_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.get(AUTH_API + '/user',  {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        Authorization : 'Basic ' + btoa(username + ':' + password)})
    });
  }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + '/signup', {
  //     username,
  //     email,
  //     password
  //   }, httpOptions);
  // }
}
