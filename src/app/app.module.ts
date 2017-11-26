import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import Noop Animations Module Js */
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/* Import Hammer Js */
import * as Hammer from 'hammerjs';

/* Import App Routing Module and Components */
import { AppRoutingModule,
  routedComponents } from './app.routing';


// Import containers
import {

  FullLayoutComponent,
} from './containers';

const APP_CONTAINERS = [

  FullLayoutComponent,
  routedComponents.app,
  ...routedComponents.others
];

// Import Components
/* import {

} from './components';

const APP_COMPONENTS = [

];  */

@NgModule({
  declarations: [

    ...APP_CONTAINERS
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [ routedComponents.app ]
})
export class AppModule { }
