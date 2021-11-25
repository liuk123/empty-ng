import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';

import { registerLocaleData } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { en_US as zorroEnUS, NzI18nService, zh_CN as zorroZhCN, zh_TW as zorroZhTW } from 'ng-zorro-antd/i18n';
import { enUS as dfEn, zhCN as dfZhCn, zhTW as dfZhTw } from 'date-fns/locale';
import ngZh from '@angular/common/locales/zh';
import ngEn from '@angular/common/locales/en';
import ngZhTw from '@angular/common/locales/zh-Hant';
import {environment} from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';


interface LangData {
  text: string;
  ng: any;
  zorro: any;
  date: any;
  abbr: string;
}

const DEFAULT = environment.lang;
const LANGS: { [key: string]: LangData } = {
  'zh-CN': {
    text: '简体中文',
    ng: ngZh,
    zorro: zorroZhCN,
    date: dfZhCn,
    abbr: '🇨🇳',
  },
  'zh-TW': {
    text: '繁体中文',
    ng: ngZhTw,
    zorro: zorroZhTW,
    date: dfZhTw,
    abbr: '🇭🇰',
  },
  'en-US': {
    text: 'English',
    ng: ngEn,
    zorro: zorroEnUS,
    date: dfEn,
    abbr: '🇬🇧',
  },
};

@Injectable({ providedIn: 'root' })
export class I18NService {
  private _default = DEFAULT;
  private change$ = new BehaviorSubject<string | null>(null);

  private _langs = Object.keys(LANGS).map(code => {
    const item = LANGS[code];
    return { code, text: item.text, abbr: item.abbr };
  });

  constructor(
    private nzI18nService: NzI18nService,
    private translate: TranslateService,
    private http: HttpClient,
    private platform: Platform,
  ) {
    // `@ngx-translate/core` 预先知道支持哪些语言
    const lans = this._langs.map((item) => item.code);
    translate.addLangs(lans);

    const defaultLan = this.getDefaultLang();
    if (lans.includes(defaultLan)) {
      this._default = defaultLan;
    }
    this.updateLangData(this._default);
  }

  private getDefaultLang(): string | undefined {
    if (!this.platform.isBrowser) {
      return DEFAULT;
    }
    let res = (navigator.languages ? navigator.languages[0] : null) || navigator.language;
    const arr = res.split('-');
    return arr.length <= 1 ? res : `${arr[0]}-${arr[1].toUpperCase()}`;
  }

  private updateLangData(lang: string) {
    console.log('current lang:' + lang)
    const item = LANGS[lang];
    registerLocaleData(item.ng);
    this.nzI18nService.setLocale(item.zorro);
    this.nzI18nService.setDateLocale(item.date);
  }

  get change(): Observable<string> {
    return this.change$.asObservable().pipe(filter((w) => w != null)) as Observable<string>;
  }

  use(lang: string, langData): void {
    lang = lang || this.translate.getDefaultLang();
    if (this.currentLang === lang) {
      return;
    }
    this.updateLangData(lang);
    this.translate.setTranslation(lang, langData);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang).subscribe(() => this.change$.next(lang));
  }

  /** 获取语言列表 */
  getLangs() {
    return this._langs;
  }

  /** 翻译 */
  fanyi(key: string, interpolateParams?: {}) {
    return this.translate.instant(key, interpolateParams);
  }

  /** 默认语言 */
  get defaultLang() {
    return this._default;
  }

  /** 当前语言 */
  get currentLang() {
    return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
  }
  /** 加载语言 */
  loadLangData(lang: string): Observable<any> {
    return this.http.get(`assets/data/i18n/${lang}.json`);
  }
}
