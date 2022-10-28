import { WriteKeyExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  template: `<h1>this is parents class</h1><br><hr>
  <app-childs (sam)=ChangeCount($event)></app-childs>`,
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent {

  ChangeCount(data:any)
  {
    console.log(data);
    alert(data)
    
  }


}

