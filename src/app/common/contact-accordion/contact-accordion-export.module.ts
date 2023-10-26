import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactAccordionComponent} from "./contact-accordion.component";
import {PhoneEmailExportModule} from "../phone-email/phone-email-export.module";
import {FindMeAlsoExportModule} from "../find-me-also/find-me-also-export.module";



@NgModule({
  declarations: [ContactAccordionComponent],
  imports: [
    CommonModule,
    PhoneEmailExportModule,
    FindMeAlsoExportModule
  ],
  exports: [ContactAccordionComponent]
})
export class ContactAccordionExportModule { }
