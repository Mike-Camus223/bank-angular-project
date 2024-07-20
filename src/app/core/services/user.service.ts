import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://your-backend-api.com/users'; // Reemplaza con tu URL real

  constructor(private http: HttpClient) {}

  saveUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
