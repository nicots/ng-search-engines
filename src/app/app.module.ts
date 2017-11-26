import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

// Import components
/* import {

} from './components'; */

const APP_COMPONENTS = [

];

@NgModule({
  declarations: [

    ...APP_CONTAINERS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ routedComponents.app ]
})
export class AppModule { }
