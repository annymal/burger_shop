import {Component, OnInit} from '@angular/core';
import {IFood} from "../../../services/food/food.interface";
import {BasketService} from "../../../services/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  food: IFood;
  basketItems = []

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.basketItems = this.basketService.getBasketItems()
  };

  // quantity:number=1;
  // // i = 1;
  // item: any;
  //
  // minusItemFromBasket(item){
  //   if (item.quantity!=1) {
  //     item.quantity = item.quantity-1;
  //   }
  // }
  // plusItemToBasket(item){
  //     item.quantity = item.quantity+1;
  //   }
  // }

  // plusItemToBasket(item){
  //     this.i++;
  //     this.quantity = this.i;
  // }
  // item: any;
  // removeItem(item: any) {
  //   this.basketService.removeCartItem(item);
  // }
  removeAll(){
    this.basketService.removeAllCart();
    this.basketItems = this.basketService.getBasketItems()
    console.log('this.basketItems delete', this.basketItems)
  }
}
