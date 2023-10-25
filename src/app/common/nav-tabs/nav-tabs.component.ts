import { Component, OnInit } from '@angular/core';
import {Tabs} from "../../model/model";
import {about, contact, hello, project} from "../../links/tabs";
import {Event, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {

  tabs:Tabs[] = [hello, about, project, contact];
  selectedIndex: number = -1;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
