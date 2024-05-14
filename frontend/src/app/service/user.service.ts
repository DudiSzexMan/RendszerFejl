import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { NavigationEnd, Router } from '@angular/router';
import { User } from '../entities/user';

export interface RegisterRequest {
  name:string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  token: string;
}

export const httpHeaders = {
  headers: new HttpHeaders({
    'Authorization': '',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/user';
  private authenticatedUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  authenticatedUser$: Observable<User | null> = this.authenticatedUserSubject.asObservable();

  private tokenKey = 'szedult-szanto';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    /*this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadAuthenticatedUser();
    });*/
  }

  register(registerData: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/register`, registerData).pipe(
      tap(response => {
        this.setToken(response.token);
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  login(loginData: LoginRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/login`, loginData).pipe(
      tap(response => this.setToken(response.token)),
      catchError(error => {
        throw error;
      })
    );
  }


  private setToken(token: string): void {
    const expirationTimestamp = this.parseTokenPayload(token).exp;

    
    this.cookieService.set(this.tokenKey, token, { expires: new Date(expirationTimestamp * 1000) });
    httpHeaders.headers = httpHeaders.headers.set('Authorization', `Bearer ${token}`);
  }

  getToken(): string | null {
    return this.cookieService.get(this.tokenKey);
  }

  
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  removeToken(): void {
    this.cookieService.delete(this.tokenKey);
  }

  private isTokenExpired(token: string): boolean {
    const expirationTimestamp = this.parseTokenPayload(token).exp;

    return expirationTimestamp < Date.now() / 1000;
  }

  private parseTokenPayload(token: string): any {
    const tokenBody = token.split('.')[1];
    const decodedTokenBody = atob(tokenBody);
    return JSON.parse(decodedTokenBody);
  }

  private loadAuthenticatedUser() {
    if (this.isAuthenticated() && !this.authenticatedUserSubject.value) {
      this.getAuthenticatedUser().subscribe(
        user => this.authenticatedUserSubject.next(user)
      );
    }
  }

  public logout(){
    this.authenticatedUserSubject.next(null);
    httpHeaders.headers = httpHeaders.headers.set('Authorization', ``);
    this.router.navigate(['/login']);
    this.removeToken();
  }

  getAuthenticatedUser(): Observable<User | null> {
    return this.http.get<User>(`${this.apiUrl}`, { headers: httpHeaders.headers });
  }
}