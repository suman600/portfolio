import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileCheckoutComponent} from "./profile-checkout.component";



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProfileCheckoutComponent],
  exports: [
    ProfileCheckoutComponent
  ]
})
export class ProfileCheckoutExportModule { }
