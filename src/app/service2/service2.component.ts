import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {
  color:string=""

  constructor(private ram:AllService) { }

  ngOnInit(): void {
    this.color=this.ram.color;
  }

}
