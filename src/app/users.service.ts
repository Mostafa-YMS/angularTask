import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: String = 'https://reqres.in/';
  constructor(private _HttpClient: HttpClient) {}

  getUsersList(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}api/users?page=2`);
  }

  getSingleUser(id: String): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}api/users/${id}`);
  }

  deleteUser(id: String): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}api/users/${id}`, {
      observe: 'response',
    });
  }

  updateUser(id: String, data: Object): Observable<any> {
    return this._HttpClient.patch(`${this.baseUrl}api/users/${id}`, data, {
      observe: 'response',
    });
  }
}
