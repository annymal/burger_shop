import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {HomeComponent} from "./components/screens/home/home.component";
import {BasketComponent} from "./components/screens/basket/basket.component";

import {FavoritesComponent} from "./components/screens/favorites/favorites.component";
import {HomeModule} from "./components/screens/home/home.module";
import {HeaderModule} from "./components/ui/layout/header/header.module";
import {LayoutModule} from "./components/ui/layout/layout.module";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MatButtonModule} from "@angular/material/button";
import {FoodService} from "./services/food.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HeaderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    InputTextModule,
    MatButtonModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
