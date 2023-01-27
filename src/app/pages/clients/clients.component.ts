import {Component, DoCheck, OnInit} from '@angular/core';
import {ClientService} from "../../services/client/client.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit , DoCheck{

  clients: User[] = [];
  selectedId = 0;
  decision = '';

  reviewModalOpened = false;

  ngDoCheck() {
    console.log(this)
  }

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe({
      next:(value)=>{
        this.clients = value.data;
      }
    })
  }

  setSelectedId(id: any,decision: string){
    if(id == null){
      alert('Ops something went wrong!')
      return;
    }
    this.selectedId = id;
    this.decision = decision;
  }

  onAccept() {
    if(this.selectedId == null || this.decision == ''){
      alert('Ops something went wrong!')
      return;
    }

    if(this.decision == 'accept'){
      console.log("YESSSSSSSSSSSSSSSs")
      this.clientService.acceptClient(this.selectedId).subscribe({
        next:(value)=>{
          alert(value.message)
        },
        error:(err)=>{
          alert("Ops something went wrong!");
        }
      })
    }
  }
}
