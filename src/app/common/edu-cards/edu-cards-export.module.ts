import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EduCardsComponent} from "./edu-cards.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EduCardsComponent
  ],
  exports: [EduCardsComponent]
})
export class EduCardsExportModule { }
