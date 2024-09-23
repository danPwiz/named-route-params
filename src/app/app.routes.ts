import { Routes } from '@angular/router';
import {MainPageComponent} from "./page/main-page.component";
import {SidePage1Component} from "./page/side-page-1.component";
import {SidePage2Component} from "./page/side-page-2.component";

export const routes: Routes = [{
  path: '',
  component: MainPageComponent
}, {
  path: 'page-1',
  component: SidePage1Component,
  outlet: 'sidebar'
},
  {
    path: 'page-2',
    component: SidePage2Component,
    outlet: 'sidebar'
  }
];
