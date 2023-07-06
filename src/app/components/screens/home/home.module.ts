import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItemComponent } from './food-item/food-item.component';
import { SearchComponent } from './search/search.component';
import {FoodService} from "../../../services/food.service";
import {RouterLinkWithHref} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { FiltersComponent } from './filters/filters.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    FoodItemComponent,
    SearchComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    FormsModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    FoodItemComponent,
    SearchComponent,
    FiltersComponent,
  ],
  providers: [FoodService]
})
export class HomeModule { }
