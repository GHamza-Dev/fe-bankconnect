import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
})
export class AgentLoginComponent {


  constructor(private authServcei: AuthService) {}

  onLoginSubmit(form: NgForm){
    if(!form.valid){
      alert('Please enter email and password ;)')
      return
    }

    this.authServcei.login(form.value.email,form.value.password,'agent')
  }

}
