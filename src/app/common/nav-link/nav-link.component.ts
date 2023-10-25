import { Component, OnInit } from '@angular/core';
import {Links} from "../../model/model";
import {facebook, github, linkedIn, twitter} from "../../links/links";

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {

  links: Links [] = [linkedIn,facebook,twitter,github];
  constructor() { }

  ngOnInit(): void {
  }

}
