import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { GamesComponent } from './Pages/games/games.component';
import { GameDetailsComponent, resolveTitle } from './Pages/game-details/game-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'SQUAD'
    },
    {
        path: 'games',
        component: GamesComponent,
        title: 'Games',
    },
    {
        path: 'games/:id',
        component: GameDetailsComponent,
        title: resolveTitle
    }
];
