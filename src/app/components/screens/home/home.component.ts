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

  constructor(private foodService: FoodService) {}

  ngOnInit() :void{
    this.foodService.getAll().subscribe(data => {
      this.foods = data;
    })
  }

}
