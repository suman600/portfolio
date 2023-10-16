import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SidebarAboutComponent} from "./sidebar-about.component";
import {PhoneEmailExportModule} from "../phone-email/phone-email-export.module";
import {DropdownExportModule} from "../dropdown/dropdown-export.module";
import {ProfileListExportModule} from "../profile-list/profile-list-export.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PhoneEmailExportModule,
    DropdownExportModule,
    ProfileListExportModule
  ],
  declarations: [
    SidebarAboutComponent
  ],
  exports: [
    SidebarAboutComponent
  ]
})

export class SidebarAboutExportModule { }
