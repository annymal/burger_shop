import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IFood} from "./food/food.interface";
import {Observable, of} from "rxjs";
import {RestService} from "./rest/rest.service";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private restService: RestService) { }

  API_URL: string= 'http://localhost:3000/food';
  URLBasket: string = 'http://localhost:3000/basket';
  URLFav: string = 'http://localhost:3000/favorites';

  getAll(): Observable<IFood[]>{
    return this.http.get<IFood[]>(this.API_URL)
  }

  postFoodToBasket(food: IFood): Observable<IFood>{
    return this.http.put<IFood>(this.URLBasket, food)
  }

  postFoodToFavorites(food: IFood): Observable<IFood>{
    return this.http.post<IFood>(this.URLFav, food)
  }
  getRandomNearestEvent(type: number): Observable<IFood>{
    return this.restService.getRandomFood(type);
  }
}
