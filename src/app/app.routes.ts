import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { GamesComponent } from './Pages/games/games.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'SQUAD'
    },
    {
        path: 'games',
        component: GamesComponent,
        title: 'Games'
    }
];
