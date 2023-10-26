import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-accordion',
  templateUrl: './filter-accordion.component.html',
  styleUrls: ['./filter-accordion.component.scss']
})
export class FilterAccordionComponent implements OnInit {
  accordions:string[] = ['project'];
  activeIndex:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
