import { Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { PlayerComponent } from './pages/player/player.component';
import { WordsComponent } from './pages/words/words.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path:  'jogo', component: GameComponent},
    {path:  'jogador', component: PlayerComponent},
    {path:  'palavras', component: WordsComponent},
    {path:  'sobre', component: AboutComponent},
];
