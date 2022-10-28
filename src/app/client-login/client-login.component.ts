import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  Data, ServerclientService, Userdata } from '../server/serverclient.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
 
  
  use:Data=new Data("","")
  message:String="";
  router: any;
 
  

  constructor(private httpclient:ServerclientService,private a:Router) { }

  ngOnInit(): void {
    
  }
  login()
 {
  this.httpclient.log(this.use).subscribe(response=>{
  if (response=='login')
  {this.a.navigate(["/welcome"]);
  alert("login successful")
  }
  else
  {  
    alert("does not exit")
    
  }
});
 }
 
}