import { Route } from '@angular/router';
import { EditVideoGame } from './components/edit-video-game/edit-video-game';
import { ListVideoGames } from './components/list-video-games/list-video-games';

export const videoGamesRoutes: Route[] = [
    {
        path: '',
        component: ListVideoGames
    },
    {
        path: ':id',
        component: EditVideoGame
    }
]