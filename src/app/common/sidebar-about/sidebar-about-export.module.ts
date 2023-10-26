import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SidebarAboutComponent} from "./sidebar-about.component";
import {AboutAccordionExportModule} from "../about-accordion/about-accordion-export.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AboutAccordionExportModule
  ],
  declarations: [
    SidebarAboutComponent
  ],
  exports: [
    SidebarAboutComponent
  ]
})

export class SidebarAboutExportModule { }
