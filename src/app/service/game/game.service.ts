import { inject, Injectable } from '@angular/core';
import { ScoreService } from '../score/score.service';
import { TimeBarService } from '../time-bar/time-bar.service';
import { WordService } from '../word/word.service';
import { DisplayMessageService } from '../display-message/display-message.service';
import { DisplayListOrFormWordsService } from '../display-list-or-form-words/display-list-or-form-words.service';
import { BehaviorSubject } from 'rxjs';
import { GetDifficulty } from '../../domain/Difficultys/GetDifficulty';
import { Difficulty } from '../../domain/Difficultys/Difficultys';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public readonly scoreService = inject(ScoreService);
  public readonly timeBarService = inject(TimeBarService);
  public readonly wordService = inject(WordService);
  public readonly displayMessageService = inject(DisplayMessageService);
  public readonly displayListOrFormWordsService = inject(DisplayListOrFormWordsService);

  private _startGame$ = new BehaviorSubject<boolean>(false);
  public startGame$ = this._startGame$.asObservable();
  
  public words$ = this.wordService.words$;

  private _numberOfPlays$ = new BehaviorSubject<number>(0);
  public numberOfPlays$ = this._numberOfPlays$.asObservable();
 
  public getDifficulty = new GetDifficulty(this.scoreService, this.timeBarService);
  public difficulty!: Difficulty;

  public startGame(difficultyValue: string): void {
    this._startGame$.next(true);
    this.difficulty = this.getDifficulty.get(difficultyValue);
    this.next();
  }

  public restartGame(): void {
    this._startGame$.next(false);
    this.scoreService.resetPoints();
    this.wordService.resetWords();
    this._numberOfPlays$.next(0);
    this.timeBarService.resetTime();
    this.displayMessageService.resetShowMessages();
    this.displayListOrFormWordsService.showWordList();
  }

  public checkWords(userWords: string[]): void {
    let correct = this.wordService.checkWords(userWords, this._numberOfPlays$.getValue());
    correct? this.correct() : this.incorrect();
  }

  private next(): void {
    let numberOfPlays = this._numberOfPlays$.getValue();
    this._numberOfPlays$.next(++numberOfPlays);

    if (numberOfPlays % 5 === 0 || numberOfPlays === 1) {
      this.wordService.addRandomWords(this.difficulty.value);
    } 
      
    this.wordService.addWord(this._numberOfPlays$.getValue());
    this.timeBarService.startCounting();
  }

  private correct(): void {
    this.displayListOrFormWordsService.showWordList();
    this.difficulty.incrementPoints();
    this.difficulty.incrementTime();
    this.displayMessageService.showCorrectMessage();

    setTimeout(() => {
      this.displayMessageService.resetShowMessages();
      this.next();
    }, 2000);
  }

  private incorrect(): void {
    this.displayMessageService.showIncorrectMessage();
    this.displayListOrFormWordsService.showWordList();
  }
}
