import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-d',
  templateUrl: './child-d.component.html',
  styleUrls: ['./child-d.component.css']
})
export class ChildDComponent implements OnInit {
  @Input()
  all:number=0;
  @Input()
  male:number=0;
  @Input()
  female:number=0;
  
  select:string="";
  constructor() { }

  @Output()
  sam:EventEmitter<string>=new EventEmitter<string>();

  ngOnInit(): void {
  }
  change()
  {
    this.sam.emit(this.select)
  }
}
