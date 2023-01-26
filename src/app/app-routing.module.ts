import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {RegisterComponent} from "./pages/register/register.component";
import {AgentLoginComponent} from "./pages/agent/agent-login/agent-login.component";
import {ClientsComponent} from "./pages/clients/clients.component";

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'agent/login',component: AgentLoginComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'clients',component: ClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
