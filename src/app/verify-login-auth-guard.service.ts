import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerifyLoginAuthGuardService implements CanActivate {

  defaultRedirect = '/feature';

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.auth.isAuthenticated().pipe(map(token => {
      if (token) {
        return this.router.parseUrl(this.defaultRedirect);
      } else {
        return true;
      }
    }));
  }
}
