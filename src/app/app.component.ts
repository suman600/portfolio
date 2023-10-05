import {Component, OnInit} from '@angular/core';
import {Links, Tabs} from "./model/model";
import {linkedIn, facebook, github, twitter} from  "./links/links"
import {hello, about, project, contact} from  "./links/tabs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  tabs:Tabs[] = [hello, about, project, contact];
  links: Links [] = [linkedIn,facebook,twitter,github];

  constructor() {
  }

  ngOnInit() {
  }

}
