import { Component, OnInit } from '@angular/core';
import {Filter} from "../../model/model";
import {authFilter, sheetFilter, themeFilter, todoFilter, reactFilter} from "../../links/filter";
import {AppService} from "../../service/app.service";
import {auth, react, sheet, theme, todo} from "../../links/cards";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements OnInit {
  filters:Filter[] = [{...todoFilter}, {...authFilter}, {...sheetFilter}, {...themeFilter}, {...reactFilter}];
  filteredArr:any = [todo, auth, sheet, theme, react];

  constructor(
    private service: AppService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.service.projectSwitch.next(this.filteredArr);
    this.router.events.subscribe((data:any) =>{
      if (data instanceof NavigationEnd){
        this.service.projectSwitch.next([todo]);
      }
    })
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
