import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavTabsComponent} from "./nav-tabs.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [NavTabsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavTabsComponent]
})
export class NavTabsExportModule { }
