import { Component, input } from '@angular/core';
import { Game } from '../games.model';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  game = input.required<Game>();
}
