import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.example.com/auth';
  private authSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.authSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkAuthStatus();
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body).pipe(
      tap(response => {
        this.setSession(response);
        this.authSubject.next(true);
      })
    );
  }

  
  logout(): void {
    this.clearSession();
    this.authSubject.next(false);
  }

  register(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/register`, body);
  }

  private checkAuthStatus(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.authSubject.next(true);
    }
  }

  private setSession(response: any): void {
    localStorage.setItem('authToken', response.token);
  }

  private clearSession(): void {
    localStorage.removeItem('authToken');
  }
}
