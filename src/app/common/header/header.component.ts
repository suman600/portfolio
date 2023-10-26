import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router, Event} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSidebar:boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  this.router.events.subscribe((event)=>{
    if(event instanceof NavigationEnd){
      this.showSidebar = false;
    }
  })
  }

  toggleSidebar(){
    this.showSidebar = !this.showSidebar
  }

}
