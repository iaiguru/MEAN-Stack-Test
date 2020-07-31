import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import AppConstant from '../constants/app.constant';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri = AppConstant.ApiBaseUri;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Create user
  createUser(data): Observable<any> {
    const url = `${this.baseUri}/user/create`;
    return this.http.post(url, data);
  }

  // Get all users
  getUsers(): Observable<any> {
    const url = `${this.baseUri}/user/list`;
    return this.http.get(url);
  }

  // Get a user
  getUser(id): Observable<any> {
    const url = `${this.baseUri}/user/${id}`;
    return this.http.get(url);
  }

  // Update a user
  updateUser(id, data): Observable<any> {
    const url = `${this.baseUri}/user/update/${id}`;
    return this.http.put(url, data);
  }

  // Delete user by Id
  deleteUser(id): Observable<any> {
    const url = `${this.baseUri}/user/delete/${id}`;
    return this.http.delete(url);
  }

  // Search users
  searchUsers(role, keyword): Observable<any> {
    const url = `${this.baseUri}/user/search`;
    return this.http.post(url, { role, keyword });
  }

  // Get roles
  getRoles(id = null): Observable<any> {
    let url = `${this.baseUri}/role/list`;
    if (id !== null && id !== undefined) {
      url += `?user_id=${id}`;
    }
    return this.http.get(url);
  }

  getAllRoles(): Observable<any> {
    return this.http.get(`${this.baseUri}/role/all-list`);
  }
}
