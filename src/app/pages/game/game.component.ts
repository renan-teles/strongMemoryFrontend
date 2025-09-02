import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navs/navbar/navbar.component';
import { GameHeaderComponent } from '../../components/headers/game-header/game-header.component';
import { HomeScreenComponent } from '../../components/general/home-screen/home-screen.component';
import { ScoreComponent } from '../../components/general/score/score.component';
import { TimebarComponent } from '../../components/general/time-bar/time-bar.component';
import { WordListComponent } from '../../components/general/word-list/word-list.component';
import { CommonModule } from '@angular/common';
import { GameService } from '../../service/game/game.service';
import { WordFormComponent } from '../../components/forms/word-form/word-form.component';

@Component({
  selector: 'app-game',
  imports: [
    NavbarComponent, 
    GameHeaderComponent, 
    HomeScreenComponent,
    ScoreComponent, 
    TimebarComponent, 
    WordListComponent, 
    WordFormComponent, 
    CommonModule
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  private readonly _gameService: GameService = inject(GameService);

  public startGame$ = this._gameService.startGame$;

  public showWordList$ = this._gameService.displayListOrFormWordsService.showWordList$
  public showWordForm$ = this._gameService.displayListOrFormWordsService.showWordForm$;

  public loading$ = this._gameService.wordService.getRandomWordsService.loading$;

  public errorSearchingForWords$ = this._gameService.wordService.getRandomWordsService.errorSearchingForWord$;
  public errorMessage$ = this._gameService.wordService.getRandomWordsService.errorMessage$;
}
