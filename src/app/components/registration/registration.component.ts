import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";
import {UserResp} from "../../models/UserResp";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  message: string = "Registration was successful";

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.regForm = this.fb.group({

      name: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZА-яЁёЇїъіІ]*$')
      ]),

      surName: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZА-яЁёЇїъіІ]*$')
      ]),

      birthDay: this.fb.control(null, [
        Validators.required
      ]),

      email: this.fb.control(null, [
        Validators.required
      ]),

      password: this.fb.control(null, [
        Validators.required
      ]),

    });
  }

  postData() {
    this.authService.postReqData(this.regForm.value).subscribe(
      res => {
        console.log(res);
        this.regForm.reset()
        alert(this.message)
      },
      err => {
        alert(err.error.message)
      });

  }

}
