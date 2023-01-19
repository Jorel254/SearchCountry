import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/PaisInterface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private _url: string = 'https://restcountries.com/v3.1';
  
  constructor(private  http: HttpClient)  { }
  
  getCountryByName(name : string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${this._url}/name/${name}`);
  }
  getCountriesByRegion(region : string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${this._url}/region/${region}`);
  }
  getCountryByCapital(capital : string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(`${this._url}/capital/${capital}`);
  }
}
