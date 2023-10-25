import {Component, OnInit} from '@angular/core';
import {Links, Tabs} from "./model/model";
import {linkedIn, facebook, github, twitter} from  "./links/links"
import {hello, about, project, contact} from  "./links/tabs"
import {NavigationEnd, Event, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  tabs:Tabs[] = [hello, about, project, contact];
  links: Links [] = [linkedIn,facebook,twitter,github];
  selectedIndex: number = -1;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event:Event) => {
      if (event instanceof NavigationEnd) {
        this.getRoute(event.url)
      }
    });
  }

  getRoute(param:any) {
    const routeMap:{[key:string]:number} = {
      '/home': 0,
      '/about': 1,
      '/project': 2,
      '/contact': 3
    };
    if (param in routeMap) {
      this.selectedIndex = routeMap[param];
    } else {
      this.selectedIndex = routeMap['/home'];
    }
  }
}
