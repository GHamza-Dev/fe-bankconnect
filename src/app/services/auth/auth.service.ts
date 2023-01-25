import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthResponse} from "../../models/auth-response";
import {env} from "../../../../config/env";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {JwtTokenService} from "../jwt/jwt.service";
import {StorageService} from "../storage/storage.service";
import {Principal} from "../../models/principal";

const url = env.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _principal$ = new BehaviorSubject<Principal>({
      username: '',
      email: '',
      roles: [],
      authenticated: false
    })
  principal$ = this._principal$.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwt: JwtTokenService,
    private storage: StorageService) {}

  private authenticate(email: string, password: string, role = 'user'){
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<AuthResponse>(`${url}/auth/${role}`,{email, password},{headers});
  }

  login(email: string, password: string){
    this.authenticate(email, password).subscribe({
      next:(value)=>{
        this.storage.set('token',value.token)
        this.jwt.setToken(value.token)
        this._principal$.next(this.jwt.getPrinciple())
        this.router.navigateByUrl('/dashboard').then(r => r)
      },
      error:(err)=>{
        console.log(err)
        alert(err.error.message)
      }
    })
  }

}
