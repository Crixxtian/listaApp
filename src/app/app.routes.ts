import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'killjoy',
    loadComponent: () => import('./killjoy/killjoy.page').then( m => m.KilljoyPage)
  },
  {
    path: 'gekko',
    loadComponent: () => import('./gekko/gekko.page').then( m => m.GekkoPage)
  },
  {
    path: 'neon',
    loadComponent: () => import('./neon/neon.page').then( m => m.NeonPage)
  },
  {
    path: 'reyna',
    loadComponent: () => import('./reyna/reyna.page').then( m => m.ReynaPage)
  },
  {
    path: 'jett',
    loadComponent: () => import('./jett/jett.page').then( m => m.JettPage)
  },
];
