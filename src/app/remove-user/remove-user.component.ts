import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss'],
})
export class RemoveUserComponent implements OnInit {
  id: String;
  constructor(
    private dialog: MatDialog,
    private _UsersService: UsersService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
  }

  userRemoved() {
    this.dialog.open(UserRemoved);
    this._Router.navigate(['/users']);
  }
  openWantToRemoveDialog() {
    const dialogRef = this.dialog.open(RempoveUser);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._UsersService.deleteUser(this.id).subscribe((res) => {
          if (res?.status === 204) {
            this.userRemoved();
          }
        });
      }
    });
  }
  ngOnInit(): void {}
}

@Component({
  selector: 'remove-user-dialoge',
  templateUrl: 'remove-user-dialoge.html',
})
export class RempoveUser {}

@Component({
  selector: 'user-removed-dialoge',
  templateUrl: 'user-removed-dialoge.html',
})
export class UserRemoved {}
