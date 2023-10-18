import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {FormData} from "../model/model";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  aboutTabs: Subject<any> = new Subject();
  projectSwitch: Subject<any> = new Subject();

  // firebase
  private API_URL: string = "/test";
  contactRef: AngularFirestoreCollection<FormData>;

  constructor(private db: AngularFirestore) {
    this.contactRef = db.collection(this.API_URL);
  }

  addDataFireBase(formData: FormData) {
    this.contactRef.add({
      name: formData.name,
      email: formData.email,
      message: formData.message
    });
  }
}
