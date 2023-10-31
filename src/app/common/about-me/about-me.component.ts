import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewChecked{

  @ViewChild('element') element: ElementRef;
  height:string;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    setTimeout(()=>{
      this.height = this.element.nativeElement.offsetHeight;
    },1000)
  }
}
