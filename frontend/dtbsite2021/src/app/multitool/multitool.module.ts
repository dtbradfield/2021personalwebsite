import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultitoolRoutingModule } from './multitool-routing.module';
import { DashComponent } from './dash/dash.component';


@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    MultitoolRoutingModule
  ]
})
export class MultitoolModule { }
