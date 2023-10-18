import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-code-snipped',
  templateUrl: './code-snipped.component.html',
  styleUrls: ['./code-snipped.component.scss']
})
export class CodeSnippedComponent implements OnInit {
  @Input() formInput:any = {}
  constructor() { }

  ngOnInit(): void {
  }

}
