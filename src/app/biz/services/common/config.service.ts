import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Config } from '../../../../assets/config/config';
import { catchError, map } from 'rxjs/operators';

export interface IConfig {
  isServed: boolean;
  withError?: boolean; // new to distinguish error in config loading
  [propName: string]: any
}

export const configFactory = (config: ConfigService) => () =>
  config.loadAppConfig();

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(
    private http: HttpClient,
    @Optional() @Inject('localConfig') private localConfig: IConfig
  ) {}
  // keep track of config
  private config = new BehaviorSubject<IConfig>(Config as IConfig);
  config$: Observable<IConfig> = this.config.asObservable();

  private static _config: IConfig;

  static get Config(): IConfig {
    return this._config || Config;
  }

  private _createConfig(config: any, withError: boolean): void {
    // cast all keys as are
    const _config = { ...Config, ...(<IConfig>config) };

    // is severd
    _config.isServed = true;

    // with error
    _config.withError = withError;

    // set static member
    ConfigService._config = _config;

    // next
    this.config.next(config);
  }

  loadAppConfig(): Observable<boolean> {
    if (this.localConfig) {
      this._createConfig(this.localConfig, true);
      return of(true);
    }

    return this.http.get(environment.configUrl + `?t=${new Date().getTime()}`).pipe(
      map((response) => {
        this._createConfig(response, false);
        return true;
      }),
      catchError((error) => {
        this._createConfig(Config, true);
        return of(false);
      })
    );
  }
}
