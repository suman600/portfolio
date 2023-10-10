import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {FileTabExportModule} from "../../common/file-tab/file-tab-export.module";
import {DropdownExportModule} from "../../common/dropdown/dropdown-export.module";
import {SidebarContactComponent} from "../../common/sidebar-contact/sidebar-contact.component";
import {FormContactComponent} from "../../common/form-contact/form-contact.component";
import {CodeSnippedComponent} from "../../common/code-snipped/code-snipped.component";

@NgModule({
  imports: [
    CommonModule,
    FileTabExportModule,
    DropdownExportModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent,
    SidebarContactComponent,
    FormContactComponent,
    CodeSnippedComponent
  ]
})
export class ContactModule { }
