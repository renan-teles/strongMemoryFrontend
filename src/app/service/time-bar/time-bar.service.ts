import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DisplayListOrFormWordsService } from '../display-list-or-form-words/display-list-or-form-words.service';

@Injectable({
  providedIn: 'root'
})
export class TimeBarService {
  private readonly displayListOrForm: DisplayListOrFormWordsService = inject(DisplayListOrFormWordsService);

  public totalTime:number = 5;
  private idInterval: any;

  private _timeRemaining = new BehaviorSubject<number>(this.totalTime);
  public timeRemaining$ = this._timeRemaining.asObservable();

  public percent$: Observable<number> = this.timeRemaining$.pipe(
    map((tempo) => Math.max(0, Math.min(100, (tempo / this.totalTime) * 100)))
  );

  public incrementTotalTime(segundos: number){
    this._timeRemaining.next(this.totalTime += segundos);
  }

  public resetTime(){
    this.totalTime = 5;
    this._timeRemaining.next(this.totalTime);

    if(this.idInterval){
      clearInterval(this.idInterval);
      this.idInterval = null;
    }
  }

  public startCounting(): void {
    this.displayListOrForm.showWordList();

    let time = this.totalTime;

    this.idInterval = setInterval(() => {
      if (time > 0) {
        time--;
        this._timeRemaining.next(time);
      } else {
        clearInterval(this.idInterval);
        this.idInterval = null;
        this.displayListOrForm.showWordForm();
      }
    }, 1000);
  }
}
