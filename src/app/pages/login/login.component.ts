import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private authService: AuthService) {}

  onLoginSubmit(form: NgForm){
    if (!form.form.valid){
      alert("Please fill out your form carefully!")
      return
    }

    this.authService.login(form.value.email,form.value.password)

  }
}
