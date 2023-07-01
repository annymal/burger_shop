import {Component, Input} from '@angular/core';
import {IFood} from "../../../../services/food/food.interface";
import {FoodService} from "../../../../services/food.service";

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent {
   @Input() food: IFood;
  constructor(private foodService: FoodService) {
  }

  addToBasket(food: IFood){
    this.foodService.postFoodToBasket(food).subscribe((data) =>
      console.log(data))
  }
}
