import { Component, inject } from '@angular/core';
import { GameService } from '../../../service/game/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-list',
  imports: [CommonModule],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.css'
})
export class WordListComponent {
  private readonly _gameService: GameService = inject(GameService);
  public words$ = this._gameService.words$;
}
