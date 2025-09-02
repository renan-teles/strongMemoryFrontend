import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { GameService } from '../../../service/game/game.service';

@Component({
  selector: 'app-word-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './word-form.component.html',
  styleUrl: './word-form.component.css'
})
export class WordFormComponent implements OnInit, OnDestroy{
  private readonly _gameService = inject(GameService);
  public words!: FormGroup;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this._gameService.numberOfPlays$
      .pipe(takeUntil(this.destroy$))
      .subscribe((quantity) => {
        this.buildForm(quantity);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSubmit(): void {
    this._gameService.checkWords(Object.values(this.words.value));
    this.words.reset();
  }

  private buildForm(quantity: number): void {
    const group: { [key: string]: FormControl } = {};
    for (let i = 0; i < quantity; i++) {
      group[`palavra${i + 1}`] = new FormControl('', Validators.required);
    }
    this.words = new FormGroup(group);
  }
}
