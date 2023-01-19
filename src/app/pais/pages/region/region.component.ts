import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  region: string = '';

  constructor(private service: PaisService) { }

  ngOnInit(): void {
  }

  SearchCountryByRegion() {
    this.service.getCountriesByRegion(this.region).subscribe((resp) => {
      console.log(resp);
    });
  }
}
