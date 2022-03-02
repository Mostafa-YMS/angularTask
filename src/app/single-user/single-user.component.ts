import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss'],
})
export class SingleUserComponent implements OnInit {
  id: String;
  user: any;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _UsersService: UsersService
  ) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
    _UsersService
      .getSingleUser(this.id)
      .subscribe((data) => (this.user = data.data));
  }

  ngOnInit(): void {}
}
