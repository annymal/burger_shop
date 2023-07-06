import { Component } from '@angular/core';
import {BasketService} from "../../../services/basket.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  constructor(private basketService: BasketService) {}

  favoritesItems = [];

  ngOnInit() {
    // "В избранном пусто. У вас еще нет никаких продуктов в списке избранного.Вернитесь пожалуйста в меню и добавьте продукты"
    this.favoritesItems = this.basketService.getFavoritesItems()
    console.log('this.basketItems', this.favoritesItems)
  };
}
