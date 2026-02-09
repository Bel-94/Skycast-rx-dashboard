import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  imports: [ ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
   @Output() cityChange = new EventEmitter<string>();

  city = new FormControl('', { nonNullable: true });

  constructor() {
    this.city.valueChanges.pipe(
      map(v => v.trim()),
      debounceTime(500),
      distinctUntilChanged(),
      filter(v => v.length >= 2),
    ).subscribe(v => this.cityChange.emit(v));
  }

}
