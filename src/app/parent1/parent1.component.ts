import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  student:any[]=[];
  selectp:string="";

  changep(select:string):void
  {

    this.selectp=select;
  }

  tmale()
  {
    return this.student.filter(student=>student.gender=="male").length;
  }
  tfemale()
  {
    return this.student.filter(student=>student.gender=="female").length;
  }
  fe()
  {
    return this.student.filter(student=>student.batch=="FE").length;
  }
  se()
  {
    return this.student.filter(student=>student.batch=="SE").length;
  }

  getcolor(gender:string)
   {
    switch(gender)
      {
      case "male":
        return "green";
      case "female":
        return "red";
      }
    return "grey";
   }

  constructor() {
    this.student=[
      {id:1,name:"sagar",surname:"mhaske",dob:"12/06/1993",gender:"male",batch:"SE"},
      {id:2,name:"Rutuja",surname:"gholap",dob:"18/7/1993",gender:"female",batch:"FE"},
      {id:3,name:"Raja",surname:"gho",dob:"18/7/1996",gender:"male",batch:"FE"},
      {id:4,name:"shradha",surname:"autade",dob:"18/7/1993",gender:"female",batch:"SE"},
    ]
    
   }
   
  ngOnInit(): void {
  }

}
