import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-accordion',
  templateUrl: './about-accordion.component.html',
  styleUrls: ['./about-accordion.component.scss']
})

export class AboutAccordionComponent implements OnInit {
  accordions:string[] = ['personal-info', 'contacts']
  activeIndex:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  accordionToggle(index:number){
    this.activeIndex = index;
  }
}
