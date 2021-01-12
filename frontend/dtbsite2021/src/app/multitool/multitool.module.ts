import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultitoolRoutingModule } from './multitool-routing.module';
import { DashComponent } from './dash/dash.component';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { RandomuserService } from './randomuser/randomuser-service.service';


@NgModule({
  declarations: [DashComponent, RandomuserComponent],
  imports: [
    CommonModule,
    MultitoolRoutingModule
  ],
  providers: [RandomuserService]
})
export class MultitoolModule { }
