import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() filterFoods = new EventEmitter<{ type: string }>();

  searchTerm: ''

  constructor() {
  }

  ngOnInit(): void {

  }

  handleFilter(type: string) {
    this.filterFoods.emit({type})
  }
}

