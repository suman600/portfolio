import { Component, OnInit } from '@angular/core';
import {Filter} from "../../model/model";
import {auth, sheet, theme, todo} from "../../links/filter";
import {NewCommand} from "@angular/cli/commands/new-impl";


@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss']
})
export class SidebarFilterComponent implements OnInit {
  filters:Filter[] = [todo, auth, sheet, theme];

  filteredArr:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxChange(param:any) {
    if (!!param){
      let hasItem = this.filteredArr.includes(param);
      if (!hasItem){
        this.filteredArr.push(param);
      }
    }
  }
}
