import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.example.com/auth'; // URL de la API de autenticación
  private authSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.authSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkAuthStatus();
  }

  // Método para iniciar sesión
  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body).pipe(
      tap(response => {
        this.setSession(response);
        this.authSubject.next(true);
      })
    );
  }

  // Método para cerrar sesión
  logout(): void {
    this.clearSession();
    this.authSubject.next(false);
  }

  // Método para registrar un nuevo usuario
  register(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/register`, body);
  }

  // Verifica si el usuario está autenticado
  private checkAuthStatus(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.authSubject.next(true);
    }
  }

  // Guarda la sesión del usuario (token, datos del usuario, etc.)
  private setSession(response: any): void {
    localStorage.setItem('authToken', response.token);
    // También puedes guardar otros datos del usuario aquí
  }

  // Limpia la sesión del usuario
  private clearSession(): void {
    localStorage.removeItem('authToken');
    // También puedes limpiar otros datos del usuario aquí
  }
}
