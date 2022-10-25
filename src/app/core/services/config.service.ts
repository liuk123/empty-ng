import { Injectable } from '@angular/core';
import { Config } from 'src/assets/config/config';

export interface IConfig {
  isServed: boolean;
  [propName: string]: any
}
declare const WebConfig: any

export const platformFactory = (): (() => void)  => {
  ConfigService.loadAppConfig(); // static element
  return () => null;
};

/**
 * 静态文件配置
 * ConfigService.config.isBrower
 */
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private static _config: IConfig;

  static get Config(): IConfig {
    return this._config || Config;
  }

  private static _createConfig(config: any): IConfig {
    // cast all keys as are
    const _config = { ...Config, ...(<IConfig>config) };
    // set static member
    ConfigService._config = _config;
    return _config;
  }

  static loadAppConfig(): void {
    if (WebConfig?.isServed) {
      this._createConfig(WebConfig);
    } else {
     // error
     this._createConfig({});
    }
  }
}
