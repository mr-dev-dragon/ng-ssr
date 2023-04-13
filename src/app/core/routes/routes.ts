import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../public/public.module').then((m) => m.PublicModule),
    data: {
      title: 'Public',
      type: 'module',
      menu: true,
    },
  },
  {
    path: 'private',
    loadChildren: () =>
      import('../../private/private.module').then((m) => m.PrivateModule),
    data: {
      title: 'private',
      type: 'module',
      menu: true,
    },
  },
  // {
  //   path: 'core',
  //   loadChildren: () => import('../core/core.module').then((m) => m.CoreModule),
  //   data: {
  //     title: 'core',
  //     type: 'module',
  //     menu: true,
  //   },
  // },
  // {
  //   path: 'shared',
  //   loadChildren: () =>
  //     import('../shared/shared.module').then((m) => m.SharedModule),
  //   data: {
  //     title: 'shared',
  //     type: 'module',
  //     menu: true,
  //   },
  // },
];
