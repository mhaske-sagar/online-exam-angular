import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ServerclientService, Userdata } from '../server/serverclient.service';

@Component({
  selector: 'app-client-server',
  templateUrl: './client-server.component.html',
  styleUrls: ['./client-server.component.css']
})
export class ClientServerComponent implements OnInit {
  user:Userdata[]=[];
  users:Userdata=new Userdata("","",0);
  message:String=""
  
  constructor(private httpclient:ServerclientService) { }

  ngOnInit(): void {
  
  
  this.getalluser()
  }
 getalluser():void
 {
   this.httpclient.getalluser().subscribe(response=>this.user=response);
 }
 adduser()
 {
   this.httpclient.adduser(this.users).subscribe(response=>{this.users=response;this.getalluser();})
 }
 views()
 {
  this.httpclient.views(this.users.username).subscribe(response=>this.users=response)
 }
 update()
 {
  this.httpclient.update(this.users).subscribe(response=>this.users=response)
 }
 Delete()
 {
  
  this.httpclient.Delete(this.users.username).subscribe(response=>{this.message=response;this.getalluser();})
  alert(this.users)
 }
 
}
