import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errMessage: String;
  constructor(private _UsersService: UsersService, private _Router: Router) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });

  getLoginInfo(loginForm: any) {
    if (loginForm.valid) {
      this._UsersService.login(loginForm.value).subscribe(
        (token) => {
          if (token) {
            this._UsersService.saveCurrentToken(token);
            this._Router.navigate(['/users']);
          }
        },
        (err) => {
          this.errMessage = err.error.error;
        }
      );
    }
  }

  ngOnInit(): void {}
}
