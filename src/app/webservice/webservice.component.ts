import { Component, OnInit } from '@angular/core';
import { HttpclientService, Student } from '../httpclient.service';

@Component({
  selector: 'app-webservice',
  templateUrl: './webservice.component.html',
  styleUrls: ['./webservice.component.css']
})
export class WebserviceComponent implements OnInit {

  student:Student=new Student(2,70);
  obj:string="";
  
  constructor(private httpserivce :HttpclientService) { }


  ngOnInit(): void {
  }
 getdata():void
 {
   this.httpserivce.getdata().subscribe(response=>{this.student=response;});
   //this.obj="target achieved";
 }
 postdata():void
 {
   this.httpserivce.postdata(this.student).subscribe(response=>{  
   this.obj=JSON.stringify(response);
   this.obj=this.obj.substring(this.obj.indexOf(":"),this.obj.indexOf("}")).substring(2);
   this.obj=this.obj.substring(0,this.obj.length-1);
   //alert(this.obj)
   });
 }

}


