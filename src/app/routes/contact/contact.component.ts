import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formeData = {}
  constructor() { }

  ngOnInit(): void {
  }

  contactItemEvent($event:any){
    this.formeData = $event;
    console.log(this.formeData);
  }
}
