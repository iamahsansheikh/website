import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  returnUrl: string;

  constructor(private fb: FormBuilder,
     private auth: AuthenticationService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });

    this.returnUrl = this.route.queryParams['returnUrl'] || '/';
  }

  login(formData: any) {
    return this.auth.login(formData)
    .subscribe(x => {
      console.log(x);
      this.router.navigate([this.returnUrl]);
    });
  }

}
