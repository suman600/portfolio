import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FilterGroupComponent} from "./filter-group.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    FilterGroupComponent
  ],
  exports: [
    FilterGroupComponent
  ]
})

export class FilterGroupExportModule { }
