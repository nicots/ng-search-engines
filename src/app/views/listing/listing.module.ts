import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// TODO: Create App.routing
import { FeatureRoutingModule, routedComponents } from './listing.routing';

import { MaterialsModule } from '../../modules';

@NgModule({
    imports: [
        HttpClientModule,
        MaterialsModule,
        FeatureRoutingModule,
    ],
    declarations: [ ...routedComponents ],
    providers: [/* TODO: Providers go here */]
})
export class ListingModule { }
