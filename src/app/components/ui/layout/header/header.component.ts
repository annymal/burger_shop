import {Component, OnInit} from '@angular/core';
import {IMenuItem} from "./header.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuItems: IMenuItem[]=[
    {
    path: '/',
    icon: 'home'
  },
    {
      path: '/basket',
      icon: 'shopping_cart'
    },
    {
      path: '/favorites',
      icon: 'favorite'
    },
    {
      path: '/profile',
      icon: 'person'
    }
  ]
  constructor() {
  }
  ngOnInit() {
  }

}
