import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private _UsersService: UsersService,
    private _Router: Router,
    private dialog: MatDialog
  ) {}

  createForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });

  userRegistered() {
    this.dialog.open(UserCreated);
    this._Router.navigate(['/users']);
  }

  getRegisterInfo(createForm: any) {
    if (createForm.valid) {
      this._UsersService.craeteUser(createForm.value).subscribe(
        (data) => {
          if (data.status === 201) {
            this.userRegistered();
          }
        },
        (err) => {
          alert(err);
        }
      );
    }
  }

  ngOnInit(): void {}
}

@Component({
  selector: 'user-created-dialoge',
  templateUrl: 'user-created-dialoge.html',
})
export class UserCreated {}
