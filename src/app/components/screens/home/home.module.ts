import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItemComponent } from './food-item/food-item.component';
import { SearchComponent } from './search/search.component';
import {FoodService} from "../../../services/food.service";



@NgModule({
  declarations: [
    FoodItemComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [FoodService]
})
export class HomeModule { }
