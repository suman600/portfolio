import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {FileTabExportModule} from "../../common/file-tab/file-tab-export.module";
import {FormContactComponent} from "../../common/form-contact/form-contact.component";
import {CodeSnippedComponent} from "../../common/code-snipped/code-snipped.component";
import {SidebarContactExportModule} from "../../common/sidebar-contact/sidebar-contact-export.module";

@NgModule({
  imports: [
    CommonModule,
    FileTabExportModule,
    ContactRoutingModule,
    SidebarContactExportModule
  ],
  declarations: [
    ContactComponent,
    FormContactComponent,
    CodeSnippedComponent
  ]
})
export class ContactModule { }
