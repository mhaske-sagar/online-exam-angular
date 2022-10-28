import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input()
  all:number=0;
  @Input()
  male:number=0;
  @Input()
  female:number=0;
  @Input()
  se:number=0;
  @Input()
  fe:number=0;
  select:string="";


  


  @Output()
  sam:EventEmitter<string>=new EventEmitter<string>();

  
  


  constructor() { }

  ngOnInit(): void {
  }

  change()
  {
    this.sam.emit(this.select);
  }

}
