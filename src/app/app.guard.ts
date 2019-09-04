import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
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
  ): Observable<boolean> | boolean {

    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
