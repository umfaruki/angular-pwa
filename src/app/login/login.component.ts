import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router, UrlTree} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.username.value, this.password.value).subscribe(token => {
        if (token) {
          this.auth.return$.subscribe(returnTo => {
            const url: string = returnTo || '/feature';
            this.router.navigate([url]);
          });
        } else {
          console.log('Invalid password or username');
        }
      });
    }
  }

}
