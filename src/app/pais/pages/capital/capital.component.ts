import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {

  capital: string = '';

  constructor(private service: PaisService) { }

  ngOnInit(): void {
  }
  SearchCountryByCapital() {
    this.service.getCountryByCapital(this.capital).subscribe((resp) => {
      console.log(resp);
    });
  }
}
