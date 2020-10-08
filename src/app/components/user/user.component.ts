import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserResp} from "../../models/UserResp";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user :UserResp
  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
      this.authService.getByID(param.id).subscribe(value => this.user = value)
    })

  }

  ngOnInit(): void {
  }

}
