import { Injectable } from '@angular/core';
import {AngularFireList} from "@angular/fire/compat/database";
import {Subject} from "rxjs";
import {FormData} from "../model/model";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  aboutTabs: Subject<any> = new Subject();
  projectSwitch: Subject<any> = new Subject();

  // firebase
  themeFormRef: AngularFireList<any>;

  constructor() { }

  addDataFireBase(formData: FormData){
    this.themeFormRef.push({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    })
  }
}
