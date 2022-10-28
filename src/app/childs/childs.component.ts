import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childs',
  template: `<button (click)='onchange()' >Change</button>`,
  styleUrls: ['./childs.component.css']
})
export class ChildsComponent {

  @Output() sam = new EventEmitter();
  onchange()
  {
    this.sam.emit(20)
  }


}
