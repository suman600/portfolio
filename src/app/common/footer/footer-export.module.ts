import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer.component";
import {NavLinkExportModule} from "../nav-link/nav-link-export.module";



@NgModule({
  imports: [
    CommonModule,
    NavLinkExportModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]

})
export class FooterExportModule { }
