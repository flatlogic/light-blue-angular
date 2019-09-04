import {Component, HostBinding} from '@angular/core';
import {LoginService} from './login.service';
import {ActivatedRoute} from '@angular/router';
import {AppConfig} from '../../app.config';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
})
export class Login {
  @HostBinding('class') classes = 'auth-page app';

  email: string = '';
  password: string = '';

  constructor(
    public loginService: LoginService,
    private route: ActivatedRoute,
    appConfig: AppConfig
  ) {
    const config: any = appConfig.getConfig();
    const creds = config.auth;
    this.email = creds.email;
    this.password = creds.password;

    if (this.loginService.isAuthenticated()) {
      this.loginService.receiveLogin();
    }

    this.route.queryParams.subscribe((params) => {
      if (params.token) {
        this.loginService.receiveToken(params.token);
      }
    });
  }

  public login() {
    const {email, password} = this;

    if (email.length !== 0 && password.length !== 0) {
      this.loginService.loginUser({email, password});
    }
  }

  public googleLogin() {
    this.loginService.loginUser({social: 'google'});
  }

  public microsoftLogin() {
    this.loginService.loginUser({social: 'microsoft'});
  }
}
