import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PhoneEmailExportModule} from "../phone-email/phone-email-export.module";
import {DropdownExportModule} from "../dropdown/dropdown-export.module";
import {SidebarContactComponent} from "./sidebar-contact.component";
import {ProfileCheckoutExportModule} from "../profile-checkout/profile-checkout-export.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PhoneEmailExportModule,
    DropdownExportModule,
    ProfileCheckoutExportModule
  ],
  declarations: [
    SidebarContactComponent
  ],
  exports: [
    SidebarContactComponent
  ]
})

export class SidebarContactExportModule { }
