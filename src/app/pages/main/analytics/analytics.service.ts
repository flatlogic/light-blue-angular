import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../app.config';
import mock from './mock';

@Injectable()
export class AnalyticsService {
  _visits: any = {};
  _performance: any = {sdk: {}, integration: {}};
  _server: any = {1: {}, 2: {}};
  _revenue: any = [];
  _mainChart: any = [];
  _isReceiving: any = false;

  config: any;

  onReceiveDataSuccess: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private http: HttpClient,
    appConfig: AppConfig
  ) {
    this.config = appConfig.getConfig();
  }

  receiveDataRequest() {
    this.receivingData();
    if (!this.config.isBackend) {
      new Promise((resolve) => {
        resolve(mock.backendData);
      }).then(data => {
        this.receiveDataSuccess(data);
      });
    } else {
      this.http.get('/analytics').subscribe(data => {
        this.receiveDataSuccess(data);
      });
    }
  }

  receiveDataSuccess(payload) {
    const {visits, performance, server, revenue, mainChart} = payload;
    this.isReceiving = false;
    this.visits = visits;
    this.performance = performance;
    this.server = server;
    this.revenue = revenue;
    this.mainChart = mainChart;
    this.onReceiveDataSuccess.emit(true);
  }

  receivingData() {
    this.isReceiving = true;
  }

  get visits() {
    return this._visits;
  }

  set visits(visits) {
    this._visits = visits;
  }

  get performance() {
    return this._performance;
  }

  set performance(performance) {
    this._performance = performance;
  }

  get server() {
    return this._server;
  }

  set server(server) {
    this._server = server;
  }

  get revenue() {
    return this._revenue;
  }

  set revenue(revenue) {
    this._revenue = revenue;
  }

  get mainChart() {
    return this._mainChart;
  }

  set mainChart(mainChart) {
    this._mainChart = mainChart;
  }

  get isReceiving() {
    return this._isReceiving;
  }

  set isReceiving(isReceiving) {
    this._isReceiving = isReceiving;
  }
}
