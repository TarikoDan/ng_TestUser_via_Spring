import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";
import {UserResp} from "../../models/UserResp";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserResp[];

  constructor(private authService: AuthService) {
    this.authService.getAllData().subscribe(value => this.users = value)
  }

  ngOnInit(): void {
  }

}
