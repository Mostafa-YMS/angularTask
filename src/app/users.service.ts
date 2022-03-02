import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  currentToken = new BehaviorSubject<any>(null);
  baseUrl: String = 'https://reqres.in/api';

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('token') != null) {
      let next = JSON.parse(localStorage.getItem('token') || '');
      if (next === '') {
        next = null;
      }
      this.currentToken.next(next);
    }
  }

  getUsersList(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/users?page=2`);
  }

  getSingleUser(id: String): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/users/${id}`);
  }

  deleteUser(id: String): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/users/${id}`, {
      observe: 'response',
    });
  }

  updateUser(id: String, data: Object): Observable<any> {
    return this._HttpClient.patch(`${this.baseUrl}/users/${id}`, data, {
      observe: 'response',
    });
  }

  craeteUser(data: Object): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/users/`, data, {
      observe: 'response',
    });
  }

  login(data: Object): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/login/`, data);
  }

  saveCurrentToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
    this.currentToken.next(token);
  }

  
}
