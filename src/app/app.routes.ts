import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingInfoComponent } from './pricing-info/pricing-info.component';
import { SoftwareDetailComponent } from './software-detail/software-detail.component';
import { SoftwareListComponent } from './software-list/software-list.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pricinginfo', component: PricingInfoComponent },
  { path: 'softwarelist', component: SoftwareListComponent },
  { path: 'softwaredetails', component: SoftwareDetailComponent },
];

export default routes;
