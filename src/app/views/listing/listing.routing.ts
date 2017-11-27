import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListingComponent } from './listing.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Listing'
        },
        component: ListingComponent
     },

    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}

export const routedComponents = [ ListingComponent ];


