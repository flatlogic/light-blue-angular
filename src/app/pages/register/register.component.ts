import {Component, HostBinding} from '@angular/core';
import {RegisterService} from './register.service';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.template.html'
})
export class RegisterComponent {
  @HostBinding('class') classes = 'auth-page app';

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    public loginService: LoginService,
    public registerService: RegisterService,
  ) {}

  public register() {
    const email = this.email;
    const password = this.password;

    if (!this.isPasswordValid()) {
      this.checkPassword();
    } else {
      this.registerService.registerUser({email, password});
    }
  }

  checkPassword() {
    if (!this.isPasswordValid()) {
      if (!this.password) {
        this.registerService.registerError('Password field is empty');
      } else {
        this.registerService.registerError('Passwords are not equal');
      }
      setTimeout(() => {
        this.registerService.registerError('');
      }, 3 * 1000);
    }
  }

  isPasswordValid() {
    return this.password && this.password === this.confirmPassword;
  }

  public googleLogin() {
    this.loginService.loginUser({social: 'google'});
  }

  public microsoftLogin() {
    this.loginService.loginUser({social: 'microsoft'});
  }
}
