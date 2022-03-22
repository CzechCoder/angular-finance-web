import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoradceService {
  apiUrl = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  // Get all users

  getUsers() {
    return this.http
    .get(`${this.apiUrl}/?results=12&seed=96879aa2d56ff323`);
  }

  // Get single user

  getUser(username: string) {
    return this.http
    .get(`${this.apiUrl}/${username}`);
  }
}
