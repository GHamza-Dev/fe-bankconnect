import { Injectable } from '@angular/core';
import {User} from "../../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {env} from "../../../../config/env";
import {AppResponse} from "../../models/app-response";

const url = env.url;
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  register(client: User){
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post<Response>(
      `${url}/client/register`,
      {
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        phone: client.phone,
        accountType: client.accountType,
        cin: client.cin,
        password: client.password
      },
      {headers});
  }

  getClients(email = "*",status = "*"){
    return this.http.get<AppResponse>(`${url}/client/all`);
  }
}
