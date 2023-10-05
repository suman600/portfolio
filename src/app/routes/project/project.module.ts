import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import {FilterProjectComponent} from "../../common/filter-project/filter-project.component";

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectComponent,
    FilterProjectComponent
  ]
})
export class ProjectModule { }
