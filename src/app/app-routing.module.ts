import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../../../../untitled1/my-app/src/app/components/screens/home/home.component";
import {SalesComponent} from "../../../../untitled1/my-app/src/app/components/screens/sales/sales.component";
import {FavoritesComponent} from "../../../../untitled1/my-app/src/app/components/screens/favorites/favorites.component";
import {ProfileComponent} from "../../../../untitled1/my-app/src/app/components/screens/profile/profile.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'sale',
  component: SalesComponent
},{
  path: 'favorites',
  component: FavoritesComponent},
  {
    path: 'profile',
    component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
