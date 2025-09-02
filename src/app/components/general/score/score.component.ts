import { Component, inject } from '@angular/core';
import { GameService } from '../../../service/game/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  imports: [CommonModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
  private readonly _gameService: GameService = inject(GameService);
  public points$ = this._gameService.scoreService.points$;
  public highestScore$ = this._gameService.scoreService.highestScore$;
}
