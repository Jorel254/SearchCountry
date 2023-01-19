import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { SeecountryComponent } from './pages/seecountry/seecountry.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    SeecountryComponent,
    TableComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ], 
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    SeecountryComponent
  ]
})
export class PaisModule { }
