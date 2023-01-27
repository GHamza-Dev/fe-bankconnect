import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  @Output() onConfirm = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Input() opened = false;
  title = '';
  text = 'Are you sure you want to confirm this action?';



  onClose(){
    this.opened = false;
  }

  onConfirmClick(){
    this.opened = false;
  }

  onCancelClick(){
    this.opened = false;
  }
}
