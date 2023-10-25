import {Component, OnInit} from '@angular/core';
import {Links} from "./model/model";
import {linkedIn, facebook, github, twitter} from  "./links/links";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'portfolio';
  links: Links [] = [linkedIn,facebook,twitter,github];

  constructor() {
  }

  ngOnInit() {
  }
}
