import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import {CardComponent} from "../../common/card/card.component";
import {FileTabExportModule} from "../../common/file-tab/file-tab-export.module";
import {DropdownExportModule} from "../../common/dropdown/dropdown-export.module";
import {SidebarFilterExportModule} from "../../common/sidebar-filter/sidebar-filter-export.mudule";

@NgModule({
  imports: [
    CommonModule,
    FileTabExportModule,
    DropdownExportModule,
    ProjectRoutingModule,
    SidebarFilterExportModule
  ],
  declarations: [
    ProjectComponent,
    CardComponent
  ]
})
export class ProjectModule { }
