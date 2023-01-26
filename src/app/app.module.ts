import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AuthDirective } from './directives/auth.directive';
import { RegisterComponent } from './pages/register/register.component';
import { AgentLoginComponent } from './pages/agent/agent-login/agent-login.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { AgentNavComponent } from './components/nav/agent-nav/agent-nav.component';
import {AppInterceptor} from "./interceptors/app.interceptor";
import { StatusComponent } from './components/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
    AuthDirective,
    RegisterComponent,
    AgentLoginComponent,
    ClientsComponent,
    AgentNavComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
