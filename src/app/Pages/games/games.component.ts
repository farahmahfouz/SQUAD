import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { BackgroundComponent } from '../../components/background/background.component';
import { GamesListComponent } from "./games-list/games-list.component";
import { GamesService } from '../../Services/games.service';
import { Game } from './games.model';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [BackgroundComponent, GamesListComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit{
  private gamesService = inject(GamesService);
  private destroyRef = inject(DestroyRef);
  games = signal<Game[] | undefined>(undefined);

  ngOnInit() {
    const subscription = this.gamesService.GamesList.subscribe({
      next: (game) => {
        this.games.set(game)
        console.log(game)
      },
      error: err => console.log(err)
    })
    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
