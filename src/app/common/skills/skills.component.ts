import { Component, OnInit } from '@angular/core';
import {
  angular,
  angularjs,
  asana,
  bitbucket,
  bootstrap,
  css,
  figma,
  github,
  html,
  javascript,
  jira,
  jquery,
  less,
  reactjs,
  scss,
  typescript,
  zeplin
} from '../../links/skill'
import {Skill} from "../../model/model";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills:Skill[] = [
    javascript,
    html,
    css,
    angular,
    angularjs,
    reactjs,
    jquery,
    typescript,
    scss,
    less,
    bootstrap,
  ];
  tools:Skill[] = [
    jira,
    asana,
    github,
    bitbucket,
    figma,
    zeplin,
  ];
  constructor() {

  }

  ngOnInit(): void {
  }

}
