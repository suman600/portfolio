import { Component, OnInit } from '@angular/core';
import {WorkExp} from "../../model/model";
import {
  dataEntryOperator,
  SeniorSoftwareEngineer,
  softwareDeveloper,
  softwareEngineer,
  uiDeveloper
} from "../../links/work";

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent implements OnInit {
  works:WorkExp[] = [
    SeniorSoftwareEngineer,
    softwareEngineer,
    softwareDeveloper,
    uiDeveloper,
    dataEntryOperator]
  constructor() { }

  ngOnInit(): void {
  }

}
