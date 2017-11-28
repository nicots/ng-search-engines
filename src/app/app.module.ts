import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

/* Import Noop Animations Module Js */
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/* Import Hammer Js */
import * as Hammer from 'hammerjs';

/* Import App Routing Module and Components */
import { AppRoutingModule,
  routedComponents } from './app.routing';

/* Import Material design Module */
import { MaterialsModule } from './modules';

/* Import MDB Material Design Bootstrap */
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Import Modules
const APP_MODULES = [

  BrowserModule,
  AppRoutingModule,
  NoopAnimationsModule,
  MaterialsModule,
  MDBBootstrapModule.forRoot()
];

// Import containers
import {

  FullLayoutComponent,
  ExternLayoutComponent

} from './containers';

const APP_CONTAINERS = [

  FullLayoutComponent,
  ExternLayoutComponent,
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

    ...APP_CONTAINERS,

  ],
  imports: [

    ...APP_MODULES,
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [ routedComponents.app ]
})
export class AppModule { }
