import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {MatIconModule} from '@angular/material/icon';
import {RouterLink, RouterLinkActive, RouterLinkWithHref} from "@angular/router";

@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterLinkActive,
    RouterLink,
    RouterLinkWithHref
  ]
})
export class HeaderModule { }
