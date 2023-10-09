import { Component, OnInit } from '@angular/core';
import {Filter} from "../../model/model";
import {auth, sheet, theme, todo} from "../../links/filter";


@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss']
})
export class SidebarFilterComponent implements OnInit {


  filters:Filter[] = [todo, auth, sheet, theme];
  constructor() { }

  ngOnInit(): void {
  }

}
