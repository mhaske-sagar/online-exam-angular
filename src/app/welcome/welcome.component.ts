import { Component, OnInit } from '@angular/core';
import { ServerclientService } from '../server/serverclient.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  constructor(private a:ServerclientService) {
    a.show=false;
    alert(a.show)
   }

  ngOnInit(): void {
  }
 get sessionStorage()
 {
  return sessionStorage;
 }
}
