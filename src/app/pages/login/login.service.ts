import {authErrorMessage} from '../../utils/functions/auth-error';
import {environment} from '../../../environments/environment';
import {AppConfig} from '../../app.config';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Injectable} from '@angular/core';

const jwt = new JwtHelperService();

@Injectable()
export class LoginService {
  config: any;
  _isFetching: boolean = false;
  _errorMessage: string = '';

  constructor(
    appConfig: AppConfig,
    private http: HttpClient,
    private router: Router,
  ) {
    this.config = appConfig.getConfig();
  }

  get isFetching() {
    return this._isFetching;
  }

  set isFetching(val: boolean) {
    this._isFetching = val;
  }

  get errorMessage() {
    return this._errorMessage;
  }

  set errorMessage(val: string) {
    this._errorMessage = val;
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    let data = null;

    // We check if app runs with backend mode
    if (!this.config.isBackend && token) return true;
    if (!token) return false;
    const date = new Date().getTime() / 1000;
    try {
      data = jwt.decodeToken(token);
    } catch(e) {
      return false;
    }
    if (!data) return false;
    return date < data.exp;
  }

  loginUser(creds) {
    // We check if app runs with backend mode
    if (!this.config.isBackend) {
      this.receiveToken('token');
    } else {
      this.requestLogin();
      if (creds.social) {
        // tslint:disable-next-line
        window.location.href = this.config.baseURLApi + this.config.authPath + '/signin/' + creds.social +
          (environment.production ? '?app=' + encodeURIComponent(document.baseURI.split('#')[0]) : '');
      } else if (creds.email.length > 0 && creds.password.length > 0) {
        this.http.post(this.config.authPath + '/signin/local', creds, {responseType: 'text'}).subscribe(response => {
          // The companion API returns a JWT as text. Earlier servers returned a JSON envelope.
          let token = response.trim();
          if (token.startsWith('{')) {
            try {
              token = JSON.parse(token).token;
            } catch {
              this.loginError('The sign-in response was invalid.');
              return;
            }
          }
          this.receiveToken(token);
        }, err => {
          this.loginError(authErrorMessage(err, 'Sign-in failed. Please try again.'));
        });

      } else {
        this.loginError('Something was wrong. Try again');
      }
    }
  }

  receiveToken(token) {
    let user: any = {};
    // We check if app runs with backend mode
    if (this.config.isBackend) {
      try {
        const claims = jwt.decodeToken(token);
        if (!claims?.user || !(claims.exp > Date.now() / 1000)) {
          this.loginError('Your sign-in session is invalid or expired.');
          return;
        }
        user = {...claims.user};
        delete user.id;
      } catch {
        this.loginError('Your sign-in session is invalid or expired.');
        return;
      }
    } else {
      user = {
        email: this.config.auth.email
      };
    }

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.receiveLogin();
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.router.navigate(['/login']);
  }

  loginError(payload) {
    this.isFetching = false;
    this.errorMessage = payload;
  }

  receiveLogin() {
    this.isFetching = false;
    this.errorMessage = '';
    this.router.navigate(['/app/main/visits']);
  }

  requestLogin() {
    this.isFetching = true;
  }
}
