import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {HomeComponent} from "./components/screens/home/home.component";
import {SalesComponent} from "./components/screens/sales/sales.component";
import {ProfileComponent} from "./components/screens/profile/profile.component";
import {FavoritesComponent} from "./components/screens/favorites/favorites.component";
import {HomeModule} from "./components/screens/home/home.module";
import {HeaderModule} from "./components/ui/layout/header/header.module";
import {LayoutModule} from "./components/ui/layout/layout.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalesComponent,
    FavoritesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HeaderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
