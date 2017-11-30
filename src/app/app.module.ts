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

// Import components
import {

  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [

  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
];

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [

  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
];

@NgModule({
  declarations: [

    ...APP_CONTAINERS,
    ...APP_DIRECTIVES,
    ...APP_COMPONENTS
  ],
  imports: [

    ...APP_MODULES,
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [ routedComponents.app ]
})
export class AppModule { }
