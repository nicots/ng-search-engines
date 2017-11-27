import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from '../containers';

export const HomeRoutes: Routes = [

    {
      path: '',
      pathMatch: 'full',
      component: FullLayoutComponent,
      children: [
        {
            path: '',
            loadChildren: './views/start/start.module#StartModule'
        }
      ]
    },
    {
      path: 'listing',
      component: FullLayoutComponent,
      children: [
        {
            path: '',
            loadChildren: './views/listing/listing.module#ListingModule'
        }
      ]
    },
];
