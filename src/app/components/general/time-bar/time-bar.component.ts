import { Component, inject } from '@angular/core';
import { GameService } from '../../../service/game/game.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-bar',
  imports: [CommonModule],
  templateUrl: './time-bar.component.html',
  styleUrl: './time-bar.component.css'
})
export class TimebarComponent {
  private readonly _gameService = inject(GameService);

  public totalTime = this._gameService.timeBarService.totalTime;
  public timeRemaining$ = this._gameService.timeBarService.timeRemaining$;
  public percent$ = this._gameService.timeBarService.percent$;
  public decreasing = false;
  private lastPercent = 100;

  public color$ = this.percent$.pipe(
    map(p => (p > 60 ? 'bg-success' : p > 30 ? 'bg-warning' : 'bg-danger'))
  );

  ngOnInit() {
    this.percent$.subscribe(percent => {
      this.decreasing = percent < this.lastPercent;
      this.lastPercent = percent;
    });
  }
}
