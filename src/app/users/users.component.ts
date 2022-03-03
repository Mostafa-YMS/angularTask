import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Object;
  constructor(private _UsersService: UsersService) {
    this._UsersService.getUsersList().subscribe(
      (data) => (this.users = data.data),
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}
}
