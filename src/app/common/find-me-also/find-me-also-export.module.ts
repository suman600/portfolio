import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FindMeAlsoComponent} from "./find-me-also.component";

@NgModule({
  declarations: [FindMeAlsoComponent],
  imports: [
    CommonModule
  ],
  exports: [FindMeAlsoComponent]
})
export class FindMeAlsoExportModule { }
