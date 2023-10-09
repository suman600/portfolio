import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileTabComponent} from "./file-tab.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FileTabComponent
  ],
  exports: [FileTabComponent]
})
export class FileTabExportModule { }
