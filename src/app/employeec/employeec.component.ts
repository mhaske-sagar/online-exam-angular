import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employeec',
  templateUrl: './employeec.component.html',
  styleUrls: ['./employeec.component.css']
})
export class EmployeecComponent implements OnInit {
   
  @Input()
  all:number=0;
  @Input()
  male:number=0;
  @Input()
  female:number=0;

  selected:string="All";

  

  constructor() { }

  ngOnInit(): void {
  }
  @Output() ram:EventEmitter<string>=new EventEmitter<string>();
  
  change()
  {
    this.ram.emit(this.selected);
  }


}
