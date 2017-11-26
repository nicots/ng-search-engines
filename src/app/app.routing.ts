import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components';

import { HomeRoutes } from './routes';

const routes: Routes = [

    ...HomeRoutes,
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = {

    app: AppComponent,

    others: [

      PageNotFoundComponent
    ]
} ;
