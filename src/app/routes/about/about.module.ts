import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {DropdownExportModule} from "../../common/dropdown/dropdown-export.module";
import {SidebarAboutComponent} from "../../common/sidebar-about/sidebar-about.component";
import {AboutMeComponent} from "../../common/about-me/about-me.component";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    DropdownExportModule
  ],
  declarations: [
    AboutComponent,
    SidebarAboutComponent,
    AboutMeComponent]
})
export class AboutModule { }
