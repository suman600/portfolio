import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ProfileListComponent} from "./profile-list.component";



@NgModule({
  declarations: [ProfileListComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ProfileListComponent]
})
export class ProfileListExportModule { }
