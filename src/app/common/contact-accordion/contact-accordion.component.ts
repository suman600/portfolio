import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-accordion',
  templateUrl: './contact-accordion.component.html',
  styleUrls: ['./contact-accordion.component.scss']
})
export class ContactAccordionComponent implements OnInit {
  accordions:string[] = ['contact', 'find-me-also-in'];
  activeIndex:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  accordionToggle(index:number){
    this.activeIndex = index;
  }
}
