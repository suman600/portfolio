import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewInit {

  @ViewChild('element') element: ElementRef;
  height:string;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let eleHeight = this.element.nativeElement.offsetHeight;
    this.height = eleHeight;
    console.log(eleHeight)
  }
}
