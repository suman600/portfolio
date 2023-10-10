import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {DropdownExportModule} from "../../common/dropdown/dropdown-export.module";
import {SidebarAboutComponent} from "../../common/sidebar-about/sidebar-about.component";
import {AboutMeComponent} from "../../common/about-me/about-me.component";
import {WorkExpComponent} from "../../common/work-exp/work-exp.component";
import {SkillsComponent} from "../../common/skills/skills.component";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    DropdownExportModule
  ],
  declarations: [
    AboutComponent,
    SidebarAboutComponent,
    AboutMeComponent,
    WorkExpComponent,
    SkillsComponent]
})
export class AboutModule { }
