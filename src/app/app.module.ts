import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../../../../untitled1/my-app/src/app/components/ui/layout/header/header.component';
import { LayoutComponent } from '../../../../untitled1/my-app/src/app/components/ui/layout/layout.component';
import {LayoutModule} from "../../../../untitled1/my-app/src/app/components/ui/layout/layout.module";
import {HeaderModule} from "../../../../untitled1/my-app/src/app/components/ui/layout/header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '../../../../untitled1/my-app/src/app/components/screens/home/home.component';
import { SalesComponent } from '../../../../untitled1/my-app/src/app/components/screens/sales/sales.component';
import { FavoritesComponent } from '../../../../untitled1/my-app/src/app/components/screens/favorites/favorites.component';
import { ProfileComponent } from '../../../../untitled1/my-app/src/app/components/screens/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import {HomeModule} from "../../../../untitled1/my-app/src/app/components/screens/home/home.module";

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
