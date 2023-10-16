import { Component, OnInit } from '@angular/core';
import {ProList} from "../../model/model";
import {about, education, skills, work} from "../../links/pro-list";
import {AppService} from "../../service/app.service";

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  lists:ProList[] = [about,work,skills,education];
  selectedIndex = 0;
  constructor(private service: AppService) { }

  ngOnInit(): void {}

  aboutSwitch(param:string, index:any){
    this.service.subject.next(param);
    this.selectedIndex = index
  }

}
