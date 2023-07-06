import {Component, Input} from '@angular/core';
import {IFood} from "../../../../services/food/food.interface";
import {FoodService} from "../../../../services/food.service";
import {MenuItem} from "primeng/api";
import {BasketService} from "../../../../services/basket.service";

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent {
  @Input() food: IFood;


  constructor(private foodService: FoodService, private basketItems: BasketService) {
  }

  addToBasket(food: IFood) {
    this.basketItems.addToBasket(food);
  }

  addToFavorites(food: IFood) {
    this.basketItems.addToFavorites(food);
  }
}
