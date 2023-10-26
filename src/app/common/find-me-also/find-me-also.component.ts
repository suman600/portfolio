import { Component, OnInit } from '@angular/core';
import {Links} from "../../model/model";
import {facebook, github, linkedIn, twitter} from "../../links/links";

@Component({
  selector: 'app-find-me-also',
  templateUrl: './find-me-also.component.html',
  styleUrls: ['./find-me-also.component.scss']
})
export class FindMeAlsoComponent implements OnInit {
  links:Links[] = [linkedIn, github, facebook, twitter]

  constructor() { }

  ngOnInit(): void {
  }

}
