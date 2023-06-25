import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFood} from "../../../../services/food/food.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() foods:IFood[];
  @Output() findFoods = new EventEmitter<{searchTerm: string}>();

  searchTerm: ''

  constructor(){}

  ngOnInit(): void{

  }
  handleSearch(e: KeyboardEvent){
    if (e.key === 'Enter'){
      this.findFoods.emit({searchTerm: this.searchTerm})
  //   this.foods = this.foods.filter(food =>
  //     food.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
   }
  }
}
