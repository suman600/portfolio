import { Component, OnInit } from '@angular/core';
import {Filter} from "../../model/model";
import {authFilter, sheetFilter, themeFilter, todoFilter} from "../../links/filter";
import {AppService} from "../../service/app.service";
import {todo} from "../../links/cards";

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit {
  filters:Filter[] = [todoFilter, authFilter, sheetFilter, themeFilter];
  filteredArr:any = [todo];

  constructor(private service: AppService) {

  }

  ngOnInit(): void {
    this.service.projectSwitch.next(this.filteredArr);
  }

  onCheckboxChange(param:any) {
    this.filteredArr = [];
    param.forEach((item:any) =>{
      if(item.checked){
        this.filteredArr.push(item.obj);
      }
    })
    this.service.projectSwitch.next(this.filteredArr);
  }
}
