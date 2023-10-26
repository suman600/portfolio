import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactAccordionComponent} from "./contact-accordion.component";
import {PhoneEmailExportModule} from "../phone-email/phone-email-export.module";



@NgModule({
  declarations: [ContactAccordionComponent],
  imports: [
    CommonModule,
    PhoneEmailExportModule
  ],
  exports: [ContactAccordionComponent]
})
export class ContactAccordionExportModule { }
