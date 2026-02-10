import { Route } from '@angular/router';
import { StatiticsResolver } from '../features/statistics/resolvers/statistics.resolver';
import { videoGamesRoutes } from '../features/video-games/video-games-routes';
import { NotFound } from '../shared/errors/not-found/not-found';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/jeux-videos',
        pathMatch: 'full'
        //children: videoGamesRoutes
    },
    {
        path: 'jeux-videos',
        children: videoGamesRoutes,
    },
    {
        path: 'auth',
        loadChildren: () => import('../features/authentication/authentication-routes').then(item => item.authenticationRoutes),
    },
    {
        path: 'stats',
        loadChildren: () => import('../features/statistics/statistics.routes').then(item => item.statisticsRoutes),
        data: {
            title: 'Mes stats de jeux',
            colorTitle: '#ff0000'
        },
        resolve: {
            stats: StatiticsResolver
        }
    },
    {
        path: '**',
        component: NotFound
    }
];
