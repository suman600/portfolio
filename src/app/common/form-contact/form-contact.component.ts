import { Component, OnInit } from '@angular/core';
import {AppService} from "../../service/app.service";
import {FormBuilder, FormGroup, Validators,} from "@angular/forms";


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
  isFormSubmitted: boolean;
  myForm: FormGroup;
  emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

  constructor(
    private service: AppService,
    private fb: FormBuilder
  ) {
    this.initializeFrom();
  }

  ngOnInit(): void {}

  initializeFrom(){
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      message: ['', [Validators.required, Validators.minLength(2)]]
    })
  }
  reGenerateForm(){
    this.isFormSubmitted = false;
  }
  resetForm(){
    this.myForm.reset();
    this.isFormSubmitted = true;
  }
  onSubmit(){
    this.resetForm();
  }

}
