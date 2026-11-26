import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

const configuredApi = document.querySelector<HTMLMetaElement>('meta[name="light-blue-api"]')?.content.trim();
const defaultApi = environment.production ? '/api' : 'http://localhost:8080/api';
const baseURLApi = (configuredApi || defaultApi).replace(/\/$/, '');

@Injectable()
export class AppConfig {
  config = {
    isBackend: environment.backend,
    baseURLApi,
    authPath: '/auth',
    auth: {
      email: 'admin@flatlogic.com',
      password: 'password'
    },
    settings: {
      colors: {
        'white': '#fff',
        'black': '#000',
        'gray-light': '#999',
        'gray-lighter': '#eee',
        'gray': '#666',
        'gray-dark': '#343434',
        'gray-darker': '#222',
        'gray-semi-light': '#777',
        'gray-semi-lighter': '#ddd',
        'brand-primary': '#5d8fc2',
        'brand-success': '#64bd63',
        'brand-warning': '#f0b518',
        'brand-danger': '#dd5826',
        'brand-info': '#5dc4bf'
      },
    },
  };

  getConfig(): Object {
    return this.config;
  }
}

