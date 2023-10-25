import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavLinkComponent} from "./nav-link.component";



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavLinkComponent],
  exports: [NavLinkComponent]
})
export class NavLinkExportModule { }
