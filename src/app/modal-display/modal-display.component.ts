import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-display',
  templateUrl: './modal-display.component.html',
  styleUrls: ['./modal-display.component.css']
})
export class ModalDisplayComponent {
  @Input() message:string;
  @Output() confirm = new EventEmitter<any>();
  
  emitEvent(value){
    this.confirm.emit(value)
  }

}
