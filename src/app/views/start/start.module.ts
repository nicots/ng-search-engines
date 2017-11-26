import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* Start Routing Module */
import { StartRoutingModule
, routedComponents } from './start.routing';



@NgModule({
    declarations: [

        ...routedComponents.others
    ],
    imports: [
        CommonModule,
        StartRoutingModule
    ],
    exports: [],
    providers: [],
})
export class StartModule {}
