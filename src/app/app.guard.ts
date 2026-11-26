import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import {LoginService} from './pages/login/login.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {

    return this.loginService.isAuthenticated() || this.router.parseUrl('/login');
  }
}
