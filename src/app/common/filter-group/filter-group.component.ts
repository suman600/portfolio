import { Component, OnInit } from '@angular/core';
import {Filter} from "../../model/model";
import {auth, sheet, theme, todo} from "../../links/filter";

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit {
  filters:Filter[] = [todo, auth, sheet, theme];
  filteredArr:string[] = ['todoApp'];
  constructor() { }

  ngOnInit(): void {}

  onCheckboxChange(param:any) {
    let value =  param.value;
    let hasItem = this.filteredArr.includes(value);
    let index = this.filteredArr.indexOf(value);
    if (param && value) {
      if (!hasItem) {
        this.filteredArr.push(value);
      } else {
        this.filteredArr.splice(index, 1);
      }
    }
    console.log(this.filteredArr)
  }

}
