import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PhoneEmailComponent} from "./phone-email.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PhoneEmailComponent
  ],
  exports: [
    PhoneEmailComponent
  ]
})

export class PhoneEmailExportModule { }
