import { Routes } from '@angular/router';

import { ExternLayoutComponent } from '../containers';

export const ExternRoutes: Routes = [

    {
      path: 'extern',
      component: ExternLayoutComponent,
      data: {
        title: 'Extern'
      },
      children: [
        {
          path: '',
          loadChildren: './views/extern/extern.module#ExternModule',
        }
      ]
    }
];

