import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: String = 'https://reqres.in/api';
  constructor(private _HttpClient: HttpClient) {}

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
    return this._HttpClient.post(`${this.baseUrl}/login/`, data, {
      observe: 'response',
    });
  }
}
