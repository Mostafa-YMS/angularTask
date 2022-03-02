import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  id: String;
  constructor(
    private _Router: Router,
    private dialog: MatDialog,
    private _ActivatedRoute: ActivatedRoute,
    private _UsersService: UsersService
  ) {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
  }
  updateForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    job: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });
  userUpdated() {
    this.dialog.open(UserUpdated);
    this._Router.navigate(['/users']);
  }

  getUpdateInfo(updateForm: any) {
    if (updateForm.valid) {
      this._UsersService.updateUser(this.id, updateForm.value).subscribe(
        (data) => {
          if (data.status === 200) {
            this.userUpdated();
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
  selector: 'user-updated-dialoge',
  templateUrl: 'user-updated-dialoge.html',
})
export class UserUpdated {}
