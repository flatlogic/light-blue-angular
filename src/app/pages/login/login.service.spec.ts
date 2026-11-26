import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { AppConfig } from '../../app.config';
import { AppGuard } from '../../app.guard';
import { LoginService } from './login.service';

describe('dashboard sign-in', () => {
  let session: LoginService;
  let router: Router;
  let http: HttpTestingController;
  const config = {isBackend: false, authPath: '/auth', auth: {email: 'member@example.invalid'}};
  const credentials = {email: config.auth.email, password: 'demo-fixture'};

  beforeEach(() => {
    config.isBackend = false;
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]), provideHttpClient(), provideHttpClientTesting(), LoginService, AppGuard,
        {provide: AppConfig, useValue: {getConfig: () => config}},
      ],
    });
    session = TestBed.inject(LoginService);
    router = TestBed.inject(Router);
    vi.spyOn(router, 'navigate').mockResolvedValue(true);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('opens the demo, keeps its session on reload and redirects to login after sign-out', () => {
    session.loginUser(credentials);
    expect(router.navigate).toHaveBeenCalledWith(['/app/main/visits']);
    const reloaded = new LoginService(TestBed.inject(AppConfig), TestBed.inject(HttpClient), router);
    expect(reloaded.isAuthenticated()).toBe(true);
    session.logoutUser();
    expect(session.isAuthenticated()).toBe(false);
    expect(TestBed.inject(AppGuard).canActivate(null!, null!).toString()).toBe('/login');
  });

  it.each(['text', 'envelope'])('opens a backend session with a %s response', format => {
    config.isBackend = true;
    const payload = {user: {id: 8, email: credentials.email}, exp: Math.floor(Date.now() / 1000) + 3600};
    const token = btoa('{}') + '.' + btoa(JSON.stringify(payload)) + '.fixture';
    session.loginUser(credentials);
    http.expectOne('/auth/signin/local').flush(format === 'text' ? token : JSON.stringify({token}));
    expect(session.isAuthenticated()).toBe(true);
    expect(JSON.parse(localStorage.getItem('user')!)).toEqual({email: credentials.email});
    expect(router.navigate).toHaveBeenCalledWith(['/app/main/visits']);
  });

  it('reports an unsuccessful API sign-in without creating a session', () => {
    config.isBackend = true;
    session.loginUser(credentials);
    const request = http.expectOne('/auth/signin/local');
    expect(request.request.method).toBe('POST');
    request.flush({message: 'Invalid credentials'}, {status: 401, statusText: 'Unauthorized'});
    expect(session.errorMessage).toBe('Invalid credentials');
    expect(session.isFetching).toBe(false);
    expect(localStorage.getItem('token')).toBeNull();
  });
});
