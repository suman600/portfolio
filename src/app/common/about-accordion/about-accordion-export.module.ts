import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutAccordionComponent} from "./about-accordion.component";
import {ProfileListExportModule} from "../profile-list/profile-list-export.module";
import {PhoneEmailExportModule} from "../phone-email/phone-email-export.module";



@NgModule({
  declarations: [
    AboutAccordionComponent,
  ],
  imports: [
    CommonModule,
    ProfileListExportModule,
    PhoneEmailExportModule
  ],
  exports: [
    AboutAccordionComponent
  ]
})
export class AboutAccordionExportModule { }
