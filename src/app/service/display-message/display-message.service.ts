import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayMessageService {
  private _showCorrectMessage$ = new BehaviorSubject<boolean>(false);
  public showCorrectMessage$ = this._showCorrectMessage$.asObservable();
    
  private _showIncorrectMessage$ = new BehaviorSubject<boolean>(false);
  public showIncorretMessage$ = this._showIncorrectMessage$.asObservable();

  public showCorrectMessage(): void{
    this._showCorrectMessage$.next(true);
    this._showIncorrectMessage$.next(false);
  }
  
  public showIncorrectMessage(): void{
    this._showCorrectMessage$.next(false);
    this._showIncorrectMessage$.next(true);
  }

  public resetShowMessages(): void{
    this._showCorrectMessage$.next(false);
    this._showIncorrectMessage$.next(false);
  }
}
