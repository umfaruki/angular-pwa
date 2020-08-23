import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token$: BehaviorSubject<{}> = new BehaviorSubject(null);
  get token$() {
    const token = JSON.parse(localStorage.getItem('token'));
    this._token$.next(token);
    return this._token$.asObservable();
  }

  private _return$ = new BehaviorSubject<string>(null);
  get return$() {
    return this._return$.asObservable();
  }

  constructor() {

  }

  isAuthenticated(): Observable<{}> {
    return this.token$;
  }

  login(username, password): Observable<{}> {
    if (username === 'admin' && password === 'admin') {
      const token = {};
      localStorage.setItem('token', JSON.stringify(token));
      this._token$.next(token);
      return of(token);
    }
    return of(null);
  }

  logout() {
    this._token$.next(null);
    localStorage.removeItem('token');
  }

  setReturnTo(returnTo: string) {
    this._return$.next(returnTo);
  }
}
