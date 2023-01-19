import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './pais/pages/capital/capital.component';
import { CountryComponent } from './pais/pages/country/country.component';
import { RegionComponent } from './pais/pages/region/region.component';
import { SeecountryComponent } from './pais/pages/seecountry/seecountry.component';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'pais/:id',
    component: SeecountryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
