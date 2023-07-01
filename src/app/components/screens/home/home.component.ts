import {IFood} from "../../../services/food/food.interface";
import {FoodService} from "../../../services/food.service";
import { Component, OnInit, OnDestroy } from '@angular/core'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  foods: IFood[] = []
  filteredFoods: IFood[]=[];

  constructor(private foodService: FoodService) {}

  ngOnInit() :void{
    this.foodService.getAll().subscribe(data => {
      this.foods = data;
      this.filteredFoods = data;
    })
  }
  onSearch(eventData: {searchTerm: string}){
    this.filteredFoods = this.foods.filter(food =>
    food.title.toLowerCase().includes(eventData.searchTerm.toLowerCase()))
  }
  onFilter(eventData: {type: string}){
    this.filteredFoods = this.foods.filter(food => food.type === eventData.type)
  }

}
