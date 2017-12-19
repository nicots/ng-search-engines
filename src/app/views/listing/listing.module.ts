import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
    providers: [/* TODO: Providers go here */],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ListingModule { }
