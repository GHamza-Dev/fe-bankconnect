import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client/client.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit{

  clients: User[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe({
      next:(value)=>{
        this.clients = value.data;
      }
    })
  }
}
