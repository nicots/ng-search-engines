import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start.component';


const routes: Routes = [

    {
        path: '',
        data: {
          title: 'Home'
        },
        component: StartComponent
      }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule { }

export const routedComponents = {

    app: [],

    others: [
        StartComponent
    ]
} ;
