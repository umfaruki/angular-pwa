import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  defaultRedirect = '/login';

  constructor(private auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.auth.isAuthenticated().pipe(map(token => {
      if (token) {
        return true;
      } else {
        this.auth.setReturnTo(state.url);
        return this.router.parseUrl(this.defaultRedirect);
      }
    }));
  }
}
