import { Component, inject } from '@angular/core';
import { GameService } from '../../../service/game/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-header',
  imports: [CommonModule],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.css'
})
export class GameHeaderComponent {
  private readonly _gameService: GameService = inject(GameService);

  public difficulty = this._gameService.difficulty.value;
  public showCorrectMessage$ = this._gameService.displayMessageService.showCorrectMessage$;
  public showIncorrectMessage$ = this._gameService.displayMessageService.showIncorretMessage$;

  public restartGame():void{
    this._gameService.restartGame();
  }
}
