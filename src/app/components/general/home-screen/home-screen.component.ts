import { Component, inject } from '@angular/core';
import { GameService } from '../../../service/game/game.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-screen',
  imports: [FormsModule],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
  private readonly _gameService: GameService = inject(GameService);
  public difficulty: string = 'facil';

  public startGame(): void {
    this._gameService.startGame(this.difficulty);
  }
}
