import { Component, OnInit } from '@angular/core';
import {Card} from "../../model/model";
import {AppService} from "../../service/app.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  cards:Card[] = [];
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.projectSwitch.subscribe((data) =>{
      this.cards = data;
      console.log('suman', data);
    })
  }

}
