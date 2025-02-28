import { Component, inject, input } from '@angular/core';
import { Game } from '../games.model';
import { CardComponent } from '../../../components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  game = input.required<Game>();
  router = inject(Router);

  handleRedirect(id: string) {
    console.log(id);
    this.router.navigate(['games', id])
  }
}
