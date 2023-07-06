import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IFood} from "../food/food.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getFood(): Observable<IFood[]> {
    return this.http.get<IFood[]>('https://localhost:3000/');
  }
  sendFoodtoBasket (data: IFood): Observable<any>{
    return this.http.post('http://localhost:3000/basket', data)
  }
  getRandomFood(type: number): Observable<IFood> {
    switch (type){
      case 0:
        return this.http.get<IFood>('/assets/mocks/food1.json')
      case 1:
        return this.http.get<IFood>('/assets/mocks/food2.json')
      case 2:
        return this.http.get<IFood>('/assets/mocks/food3.json')
      default:
        return this.http.get<IFood>('/assets/mocks/food4.json')
    }
  }
}
