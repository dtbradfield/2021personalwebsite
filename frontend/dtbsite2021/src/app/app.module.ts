import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MultitoolRoutingModule } from './multitool/multitool-routing.module';
import { PortfolioRoutingModule } from './portfolio/portfolio-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultitoolRoutingModule,
    PortfolioRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
