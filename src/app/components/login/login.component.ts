import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserResp} from "../../models/UserResp";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logForm: FormGroup;
  message: string = "LogIn was successful";
  isCorrect = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.logForm = this.fb.group({

      email: this.fb.control(null, [
        Validators.email,
        Validators.required
      ]),

      password: this.fb.control(null, [
        Validators.required
      ]),

    });
  }

  logIn() {
    this.authService.getByEmail(this.logForm.value.email).subscribe(
      res => {
        console.log(res);
        if (res.password === this.logForm.value.password) {
          this.isCorrect = true;
          setTimeout(()=>{
            this.isCorrect = false;
            alert(this.message)
            this.logForm.reset()
            },3000);

        }else {
          alert("Incorrect password!!")
        }
      },
      err => {
        alert(err.error.message)
      });

  }

}
