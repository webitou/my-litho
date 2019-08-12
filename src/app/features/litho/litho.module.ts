import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LithoRoutingModule } from './litho-routing.module';
import { LithoPageComponent } from './components/litho-page/litho-page.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    LithoPageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    LithoRoutingModule
  ]
})
export class LithoModule { }
