import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import {FilterProjectComponent} from "../../common/filter-project/filter-project.component";
import {CardComponent} from "../../common/card/card.component";

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
    declarations: [
        ProjectComponent,
        FilterProjectComponent,
        CardComponent
    ]
})
export class ProjectModule { }
