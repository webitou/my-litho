import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LithoPageComponent } from './components/litho-page/litho-page.component';


const routes: Routes = [
  {
    path: '',
    component: LithoPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class LithoRoutingModule { }
