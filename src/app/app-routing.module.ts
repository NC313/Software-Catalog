import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SoftwareListComponent } from './software-list/software-list.component';
import { SoftwareDetailComponent } from './software-detail/software-detail.component';
import { PricingInfoComponent } from './pricing-info/pricing-info.component';
import { AboutComponent } from './/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'software-list', component: SoftwareListComponent },
  { path: 'software-detail/:id', component: SoftwareDetailComponent },
  { path: 'pricing-info', component: PricingInfoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' } // redirecting any unknown paths to the Young Home component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
