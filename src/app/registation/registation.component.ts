import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {
  uname:string="";
  constructor(private router: Router){ }

  ngOnInit(): void {
  


}
login()
{
  sessionStorage.setItem("username",this.uname);
  this.router.navigate(["/login"]);
}
}