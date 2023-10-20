import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-code-snipped',
  templateUrl: './code-snipped.component.html',
  styleUrls: ['./code-snipped.component.scss']
})
export class CodeSnippedComponent implements OnInit {
  @Input() formInput:any = {}
  date = new Date();
  day: string = '';
  month: string = '';
  year = this.date.getFullYear();
  constructor() { }

  ngOnInit(): void {
    this.getDay();
    this.getMonth();
  }
  getDay(){
    switch (this.date.getDay()){
      case 0:
        this.day = "Sunday";
        break;
      case 1:
        this.day = "Monday";
        break;
      case 2:
        this.day = "Tuesday";
        break;
      case 3:
        this.day = "Wednesday";
        break;
      case 4:
        this.day = "Thursday";
        break;
      case 5:
        this.day = "Friday";
        break;
      case  6:
        this.day = "Saturday";
        break
      default:
        this.month = "Invalid day";
    }
  }
  getMonth(){
    switch (this.date.getDay()){
      case 0:
        this.month = "January";
        break;
      case 1:
        this.month = "February";
        break;
      case 2:
        this.month = "March";
        break;
      case 3:
        this.month = "April";
        break;
      case 4:
        this.month = "May";
        break;
      case 5:
        this.month = "June";
        break;
      case 6:
        this.month = "July";
        break;
      case 7:
        this.month = "August";
        break;
      case 8:
        this.month = "September";
        break;
      case 9:
        this.month = "October";
        break;
      case 10:
        this.month = "November";
        break;
      case 11:
        this.month = "December";
        break;
      default:
        this.month = "Invalid month";
    }
  }
}
