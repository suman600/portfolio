import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarFilterComponent} from "./sidebar-filter.component";
import {FormsModule} from "@angular/forms";
import {DropdownExportModule} from "../dropdown/dropdown-export.module";
import {FilterGroupExportModule} from "../filter-group/filter-group-export.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownExportModule,
    FilterGroupExportModule
  ],
  declarations: [
    SidebarFilterComponent
  ],
  exports: [
    SidebarFilterComponent
  ]
})

export class SidebarFilterExportModule { }
