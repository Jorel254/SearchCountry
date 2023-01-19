import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  SearchText: string = '';
  debouncer: Subject<string> = new Subject();

  @Output() OnEneter: EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.OnDebounce.emit(value);
    });
  }
  Search() {
    this.OnEneter.emit(this.SearchText);
  }
  KeyPress() {
    this.debouncer.next(this.SearchText);
  }
}
