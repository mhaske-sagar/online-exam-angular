import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeep',
  templateUrl: './employeep.component.html',
  styleUrls: ['./employeep.component.css']
})
export class EmployeepComponent implements OnInit {

  employeedata:any[]=[];
  selectedp:string="All";
  pchange(selected:string)
  {
    this.selectedp=selected;
  }

  constructor() {
    this.employeedata=[{Id:1,Name:"sagar",dob:"12/06/1993",Gender:"Male"},
    {Id:2,Name:"nikhil",dob:"23/09/1996",Gender:"Male"},
    {Id:3,Name:"radha",dob:"31/06/1998",Gender:"Female"}]
      
   }

  ngOnInit(): void {
  }
  total():number
  {
    return this.employeedata.length;
  }
   totalmale():number{
    return this.employeedata.filter(employeedata => employeedata.Gender=="Male").length;
  }
  totalfemale():number{
    return this.employeedata.filter(employeedata => employeedata.Gender=="Female").length;
  }
  
 
}
