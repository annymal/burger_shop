import { Component } from '@angular/core';
import {HomeComponent} from "../../screens/home/home.component";
import {BasketComponent} from "../../screens/basket/basket.component";
import {FavoritesComponent} from "../../screens/favorites/favorites.component";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  items: MenuItem[];
  constructor() {}

  initMenuItems(): MenuItem[] {
    return [
      {
        label: '',
        routerLink: HomeComponent
      },{
        label: 'basket',
        routerLink: BasketComponent
      },{
        label: 'favorites',
        routerLink: FavoritesComponent},

    ];
  }

}
