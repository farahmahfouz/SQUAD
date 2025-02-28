import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Game } from './../Pages/games/games.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiUrl = 'https://games-shop-api.glitch.me/api/v1/games';
  private http = inject(HttpClient);

  getGamesList() {
    return this.http.get<{ data: { games: Game[] } }>(`${this.apiUrl}`)
    .pipe(
      map(response => response.data.games)
    );
  }

  // getGamesDetails(id: string) {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }
}