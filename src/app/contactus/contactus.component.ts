import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactusForm: FormGroup;
  // firstName: FormControl;
  // lastName: FormControl;
  // email: FormControl;
  // message: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactusForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  sendMessage(formData: any) {
    console.log(formData);
  }

}
