import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Create user
  createUser(data): Observable<any> {
    const url = `${this.baseUri}/user/create`;
    return this.http.post(url, data).pipe(catchError(this.handleError));
  }

  // Get all users
  getUsers(): Observable<any> {
    const url = `${this.baseUri}/user/list`;
    return this.http.get(url);
  }

  // Delete user by Id
  deleteUser(id): Observable<any> {
    const url = `${this.baseUri}/user/delete/${id}`;
    return this.http.delete(url);
  }

  // Error handling
  handleError(res: HttpErrorResponse) {
    return throwError(res.error);
  }
}
