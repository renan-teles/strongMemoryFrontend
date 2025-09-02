import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private _points$ = new BehaviorSubject<number>(0);
  public points$ = this._points$.asObservable();
 
  private _highestScore$ = new BehaviorSubject<number>(0);
  public highestScore$ = this._highestScore$.asObservable();

  public incrementPoints(points: number): void{
    let score = this._points$.getValue() + points;    
    if(score > this._highestScore$.getValue()) this.saveHighestScore(score);
    this._points$.next(score);
  }

  private saveHighestScore(pontuacao:number): void{
    this._highestScore$.next(pontuacao);
  }

  public resetPoints(): void{
    this._points$.next(0);
  }

  //private getHighestScore(): void{}
}
