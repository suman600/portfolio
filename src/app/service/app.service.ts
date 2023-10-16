import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  subject: Subject<any> = new Subject();
  constructor() { }
}
