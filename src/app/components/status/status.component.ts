import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
})
export class StatusComponent implements OnInit{

    @Input() status = 'pending';
    classes = 'text-purple-700 bg-purple-100';

    ngOnInit() {
      if (this.status == 'accepted'){
        this.classes = 'text-green-700 bg-green-100'
      }else if (this.status == 'rejected'){
        this.classes = 'text-red-700 bg-red-100'
      }
    }

}
