import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWord } from '../../model/IWord.model';
import { GetRandomWordsService } from '../get-random-words/get-random-words.service';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  public getRandomWordsService: GetRandomWordsService = inject(GetRandomWordsService);

  private _wordRepository$ = new BehaviorSubject<IWord[]>([]);
  private _words$ = new BehaviorSubject<IWord[]>([]);
  public words$ = this._words$.asObservable();

  public async addRandomWords(difficultyValue: string): Promise<void> {
    const newWords = await this.getRandomWordsService.get(difficultyValue);
    if (newWords.length === 0) return;

    const currentWords = this._wordRepository$.getValue();
    this._wordRepository$.next([...currentWords, ...newWords]);
  }

  public addWord(numberOfPlays: number): void {
    const wordRepository = this._wordRepository$.getValue();
    const words = [...this._words$.getValue()];

    const nextWord = wordRepository[numberOfPlays - 1];

    words.push(nextWord);
    this._words$.next(words);
  }

  public resetWords(): void {
    this._wordRepository$.next([]);
    this._words$.next([]);
  }

  public checkWords(userWords: string[], numberOfPlays: number): boolean {
    let isCorrect = true;
    const words = this._words$.getValue();

    for (let i = 0; i < numberOfPlays; i++) {
      if (words[i].word.toLowerCase() !== userWords[i]?.toLowerCase()) {
        isCorrect = false;
        break;
      }
    }

    return isCorrect;
  }
}
