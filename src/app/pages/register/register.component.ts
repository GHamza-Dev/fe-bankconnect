import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ClientService} from "../../services/client/client.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {


  constructor(private clientService: ClientService) {
  }

  onRegisterSubmit(form: NgForm){
    if (!form.form.valid){
      alert("Please fill out your form carefully!")
      return;
    }

    this.clientService.register(form.value).subscribe({
      next:(value)=>{
        alert("Registration done successfully!");
      },
      error:(err)=>{
        console.log(err)
      }
    })

    form.resetForm();
  }

}
