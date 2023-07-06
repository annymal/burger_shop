import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout.component";
import {HeaderModule} from "./header/header.module";
import {FooterComponent} from "./footer/footer.component";



@NgModule({
  declarations: [LayoutComponent,FooterComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class LayoutModule { }
