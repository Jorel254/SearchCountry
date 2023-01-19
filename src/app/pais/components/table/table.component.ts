import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/PaisInterface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() Countries: Country[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
