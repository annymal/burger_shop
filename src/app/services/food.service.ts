import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IFood} from "./food/food.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  API_URL: string= 'http://localhost:3000/food';

  getAll(): Observable<IFood[]>{
    return this.http.get<IFood[]>(this.API_URL)
  }
}
