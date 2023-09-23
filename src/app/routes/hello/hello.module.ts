import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';
import {IntroMeComponent} from "../../common/intro-me/intro-me.component";
import {HighlightsComponent} from "../../common/highlights/highlights.component";

@NgModule({
  imports: [
    CommonModule,
    HelloRoutingModule
  ],
  declarations: [
    HelloComponent,
    IntroMeComponent,
    HighlightsComponent
  ]
})
export class HelloModule { }
