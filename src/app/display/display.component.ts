import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  Langauge:string="";
  show():void
  { 
    alert("selected language is  "+ this.Langauge);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
