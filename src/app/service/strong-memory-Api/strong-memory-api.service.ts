import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IWord } from '../../model/IWord.model';

@Injectable({
  providedIn: 'root',
})
export class StrongMemoryApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly URL_BASE = '';

  public async getRandomWords(quantity: number, difficulty: string): Promise<IWord[]> {
    const params = new HttpParams().set('quantity', quantity).set('difficulty', difficulty);

    return firstValueFrom(
      this._httpClient.get<IWord[]>(`${this.URL_BASE}/word/get-random-words`, { params })
    );
  }
}
