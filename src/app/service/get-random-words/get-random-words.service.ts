import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWord } from '../../model/IWord.model';
import { StrongMemoryApiService } from '../strong-memory-Api/strong-memory-api.service';

@Injectable({
  providedIn: 'root',
})
export class GetRandomWordsService {
  private readonly _strongMemoryApi = inject(StrongMemoryApiService);

  private _loading$ = new BehaviorSubject<boolean>(false);
  public loading$ = this._loading$.asObservable();

  private _erroMessage$ = new BehaviorSubject<string>('');
  public errorMessage$ = this._erroMessage$.asObservable();

  private _errorSearchingForWord$ = new BehaviorSubject<boolean>(false);
  public errorSearchingForWord$ = this._errorSearchingForWord$.asObservable();

  private readonly wordsQuantity = 5;

  public async get(difficulty: string): Promise<IWord[]> {
    this._loading$.next(true);
    this._errorSearchingForWord$.next(false);
    this._erroMessage$.next('');

    try {
      const newWords = await this._strongMemoryApi.getRandomWords(this.wordsQuantity, difficulty);

      if (newWords.length === 0) {
        throw new Error('Palavras não encontradas.');
      }

      return newWords;
    } catch (error) {
      console.error('Erro ao buscar palavras da API:', error);
      this._erroMessage$.next('Erro ao carregar palavras, tente novamente.');
      this._errorSearchingForWord$.next(true);
      return [];
    } finally {
      this._loading$.next(false);
    }
  }
}
