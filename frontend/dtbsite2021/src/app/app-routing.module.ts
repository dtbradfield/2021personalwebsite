import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'multitool', loadChildren: () => import('src/app/multitool/multitool.module').then(m => m.MultitoolModule) },
  { path: 'portfolio', loadChildren: () => import('src/app/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
