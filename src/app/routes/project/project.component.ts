import { Component, OnInit } from '@angular/core';
import {Card} from "../../model/model";
import {auth, sheet, theme, todo} from "../../links/cards";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  cards:Card[] = [todo,auth, sheet, theme];
  constructor() { }

  ngOnInit(): void {
    console.log(this.cards);
  }

}
