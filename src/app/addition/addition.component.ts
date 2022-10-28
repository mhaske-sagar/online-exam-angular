import { ParseError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})


export class AdditionComponent implements OnInit {
  first:string="";
  second:string="";
  result:number=0;
  no:number=0;
  
   Ans()
{
  console.log("first =" + this.first);
  console.log("second =" + this.second);
  if(this.no==1)
  {
    this.result=(parseInt(this.first)) + (parseInt(this.second));
  }
  else if(this.no==2)
  {
    this.result=(parseInt(this.first)) - (parseInt(this.second));
  }
  else if(this.no==3)
  {
    this.result=(parseInt(this.first)) * (parseInt(this.second));
  }
  else if(this.no==4)
  {
    this.result=(parseInt(this.first)) * (parseInt(this.second));
  }
  else
   { alert("select correct option")}

  

}

  constructor() { }

  ngOnInit(): void {
  }

}
