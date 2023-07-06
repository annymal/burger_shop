import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {ProfileComponent} from "./profile.component";

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent },
  {
    path: '',
    component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
