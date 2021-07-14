import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  submitUser(params: any): Observable<any> {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/users', { params });
  }
}
