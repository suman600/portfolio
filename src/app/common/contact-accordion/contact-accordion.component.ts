import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-accordion',
  templateUrl: './contact-accordion.component.html',
  styleUrls: ['./contact-accordion.component.scss']
})
export class ContactAccordionComponent implements OnInit {
  accordions:string[] = ['contact',];
  activeIndex:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
