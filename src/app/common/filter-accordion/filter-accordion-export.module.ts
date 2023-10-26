import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterAccordionComponent} from "./filter-accordion.component";
import {FilterGroupExportModule} from "../filter-group/filter-group-export.module";



@NgModule({
  declarations: [
    FilterAccordionComponent,
  ],
  imports: [
    CommonModule,
    FilterGroupExportModule
  ],
  exports: [
    FilterAccordionComponent
  ]
})
export class FilterAccordionExportModule { }
