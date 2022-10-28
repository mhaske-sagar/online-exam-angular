import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';

@Component({
  selector: 'app-sevice1',
  templateUrl: './sevice1.component.html',
  styleUrls: ['./sevice1.component.css']
})
export class Sevice1Component implements OnInit {

  color:string=""
  constructor(private sam:AllService) { }
  

  ngOnInit(): void {
    this.color=this.sam.color;
    alert(this.sam.add(20,40));
  }
show()
{
  this.sam.color=this.color;
  alert("selected color is  "+this.color);
  


}

}
