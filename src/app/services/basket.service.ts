import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IFood} from "./food/food.interface";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketItems = []
  favoritesItems = [];
  public BasketList = new BehaviorSubject<any>([]);


  constructor() { }

  addToBasket(item) {
    this.basketItems.push(item);//добавляем эл-т
    localStorage.setItem('basket', JSON.stringify(this.basketItems))//запись в localstorage в виде строки
  }
  getBasketItems() {
    const itemsFromStorage = localStorage.getItem('basket')
    const basketArray = JSON.parse(itemsFromStorage)
    return this.basketItems?.length === 0 ? basketArray : this.basketItems;
  }
  // removeCartItem(foodId:string) {
  //   this.basketItems = this.basketItems.filter(item => item.food.id !== foodId);
  //   // localStorage.setItem('basket', JSON.stringify(this.basketItems))//запись в localstorage в виде строки
  //   this.BasketList.next(this.basketItems)
  //
  // }

  removeAllCart(){
    this.basketItems = [];
    this.BasketList.next(this.basketItems)
    console.log(this.basketItems);
    localStorage.setItem('basket', JSON.stringify(this.basketItems))

  }

  addToFavorites(item) {
    this.favoritesItems.push(item);
    localStorage.setItem('favorites',JSON.stringify(this.favoritesItems))
  }
  getFavoritesItems() {
    const itemsFromStorage = localStorage.getItem('favorites')
    const favoritesArray = JSON.parse(itemsFromStorage)
    return this.favoritesItems?.length === 0 ? favoritesArray : this.favoritesItems;
  }
}
