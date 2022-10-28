import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:any="";
 

  constructor(private router:Router) {
    this.uname=sessionStorage.getItem("username");
   }

  ngOnInit(): void {
  }
  goto()
  {
    this.router.navigate(['/welcome'])
  }

}
