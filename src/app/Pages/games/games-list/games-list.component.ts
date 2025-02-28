import { Component, input } from '@angular/core';
import { Game } from '../games.model';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [GameCardComponent],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css'
})
export class GamesListComponent {
  games = input.required<Game[]>();
}
