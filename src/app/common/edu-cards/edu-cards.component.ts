import { Component, OnInit } from '@angular/core';
import {EduData} from "../../model/model";
import {hsc, ssc} from "../../links/education";

@Component({
  selector: 'app-edu-cards',
  templateUrl: './edu-cards.component.html',
  styleUrls: ['./edu-cards.component.scss']
})
export class EduCardsComponent implements OnInit {

  educations:EduData[] = [hsc,ssc];

  constructor() { }

  ngOnInit(): void {
  }

}
