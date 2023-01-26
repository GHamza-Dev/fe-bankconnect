import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {Principal} from "../models/principal";

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {

  @Input() set appAuth(role: string){
    this.auth.principal$.subscribe({
      next:(value)=>{
        if(!(<Principal>value).authenticated){
          this.viewContainerRef.clear();
          return;
        }

        if (role !== '*' && !((<Principal>value).role === `ROLE_${role}`)){
          this.viewContainerRef.clear();
          return;
        }

        this.viewContainerRef.createEmbeddedView(this.templateRef)
      }
    })

  }

  constructor(
    private auth: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef

  ) { }

}
