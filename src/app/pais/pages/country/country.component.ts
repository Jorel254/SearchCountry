import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/PaisInterface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  termino: string = '';
  hasError: boolean = false;
  Countries: Country[] = [];
  constructor(private service: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hasError = false;
    this.termino = termino;
    this.service.getCountryByName(termino).subscribe(
      (resp) => {
        this.Countries = resp;
        console.log(resp);
      },
      (err) => {
        this.hasError = true;
        this.Countries = [];
      }
    );
  }

  Suggestion(termino : string){
    this.hasError = false;
  }
}
