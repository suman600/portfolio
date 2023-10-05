import { Component, OnInit } from '@angular/core';
import {Filter} from "../../model/model";
import {auth, sheet, theme, todo} from "../../links/filter";


@Component({
  selector: 'app-filter-project',
  templateUrl: './filter-project.component.html',
  styleUrls: ['./filter-project.component.scss']
})
export class FilterProjectComponent implements OnInit {


  filters:Filter[] = [todo, auth, sheet, theme];
  constructor() { }

  ngOnInit(): void {
  }

}
