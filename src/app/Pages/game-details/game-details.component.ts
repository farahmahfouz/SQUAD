import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { GamesService } from '../../Services/games.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { Game } from '../games/games.model';
import { BackgroundComponent } from "../../components/background/background.component";
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [BackgroundComponent, ButtonComponent],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css'
})
export class GameDetailsComponent implements OnInit {
  id = input<string>();
  gameService = inject(GamesService);
  game = signal<Game | undefined>(undefined);
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    const id = this.id();
    if (id) {
      const subscription = this.gameService.getGamesDetails(id).subscribe({
        next: (game) => {
          console.log(game)
          this.game.set(game)
        }
      })
      this.destroyRef.onDestroy(() => subscription.unsubscribe());
    }
  }
}


export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  const gamesService = inject(GamesService);

  return gamesService.GamesList.pipe(
    map((games: Game[]) => {
      const gameTitle = games.find(g => g._id === activatedRoute.paramMap.get('id'))?.title;
      return gameTitle ?? 'Game Details';
    }),
    catchError(() => of('Game Details'))
  );
};
