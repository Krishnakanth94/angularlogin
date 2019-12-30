import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {SessionStorageService} from '../services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidCredentialMsg: string;
  constructor(   private formBuilder: FormBuilder,
                 private route: ActivatedRoute,
                 private router: Router,
                 private authService: AuthService,
                 private  sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (this.sessionStorageService.getItem('userInfo')) {
      this.router.navigate( ['/home'] );
   }
  }

  onSubmit() {
    const uname = this.loginForm.get('username').value;
    const pwd = this.loginForm.get('password').value;
    this.authService.isUserAuthenticated(uname, pwd).subscribe(
      authenticated => {
        if (authenticated) {
          const url =  this.authService.getRedirectUrl();
          console.log('Redirect Url:' + url);
          this.router.navigate( [url] );
        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        }
      }
    );
  }
}
