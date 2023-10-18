import {Component, OnChanges, OnInit} from '@angular/core';
import {AppService} from "../../service/app.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    type: string = 'aboutMe';
    constructor(private service: AppService) { }

    ngOnInit(): void {
      this.service.aboutTabs.subscribe((data) =>{
        this.type = data;
      })
    }

}
