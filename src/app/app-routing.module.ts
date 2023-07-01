import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/screens/home/home.component";
import {BasketComponent} from "./components/screens/basket/basket.component";
import {FavoritesComponent} from "./components/screens/favorites/favorites.component";


const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'basket',
  component: BasketComponent
},{
  path: 'favorites',
  component: FavoritesComponent},
  {
    path: 'profile',
    loadChildren: ()  => import('./components/screens/profile/profile.module').then(m => m.ProfileModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
