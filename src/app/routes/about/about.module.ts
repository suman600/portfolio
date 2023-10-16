import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {AboutMeComponent} from "../../common/about-me/about-me.component";
import {WorkExpComponent} from "../../common/work-exp/work-exp.component";
import {SkillsComponent} from "../../common/skills/skills.component";
import {SidebarAboutExportModule} from "../../common/sidebar-about/sidebar-about-export.module";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SidebarAboutExportModule
  ],
  declarations: [
    AboutComponent,
    AboutMeComponent,
    WorkExpComponent,
    SkillsComponent]
})
export class AboutModule { }
