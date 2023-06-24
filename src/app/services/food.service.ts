import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IFood} from "./food/food.interface";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/food'

  getAll(){
    return this.http.get<IFood[]>(this.API_URL)
  }
}
