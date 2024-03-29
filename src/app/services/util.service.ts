import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  isComponentActive$: BehaviorSubject<string> = new BehaviorSubject<string>('about');
  findProject$: BehaviorSubject<string> = new BehaviorSubject('');
  language$: BehaviorSubject<string> = new BehaviorSubject('ru');
  theme$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

  setIsComponentActive(value: string): void {
    this.isComponentActive$.next(value);
  }

  setFindProjectString(str: string){
    this.findProject$.next(str);
  }

  getLanguage(){
    return this.language$;
  }

  setTheme(val: boolean): void {
    this.theme$.next(val);
  }
}
