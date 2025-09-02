import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayListOrFormWordsService {
  private _showWordList$ = new BehaviorSubject<boolean>(true);
  public showWordList$ = this._showWordList$.asObservable();
  
  private _showWordForm$ = new BehaviorSubject<boolean>(false);
  public showWordForm$ = this._showWordForm$.asObservable();

  public showWordList(): void{
    this._showWordList$.next(true);
    this._showWordForm$.next(false);
  }

  public showWordForm(): void{
    this._showWordList$.next(false);
    this._showWordForm$.next(true);
  }
}
