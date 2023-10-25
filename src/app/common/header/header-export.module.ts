import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavTabsExportModule} from "../nav-tabs/nav-tabs-export.module";
import {HeaderComponent} from "./header.component";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NavTabsExportModule
  ],
  exports: [HeaderComponent]
})
export class HeaderExportModule { }
