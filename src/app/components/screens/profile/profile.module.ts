import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import {RegistrationComponent} from "./registration/registration.component";
import {ProfileComponent} from "./profile.component";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    RegistrationComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    InputTextModule,
    InputTextModule,
    FormsModule,
    ToastModule
  ],
  providers: [MessageService],
})
export class ProfileModule { }
