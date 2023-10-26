import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SidebarContactComponent} from "./sidebar-contact.component";
import {ContactAccordionExportModule} from "../contact-accordion/contact-accordion-export.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactAccordionExportModule
  ],
  declarations: [
    SidebarContactComponent
  ],
  exports: [
    SidebarContactComponent
  ]
})

export class SidebarContactExportModule { }
