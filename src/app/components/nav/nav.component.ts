import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Principal} from "../../models/principal";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  loggedIn = false;
  user!: Principal;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.principal$.subscribe({
      next:(value)=>{
        this.loggedIn = value.authenticated;
        this.user = value;
      }
    })
  }
}
