import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:`<h1>This is parent component</h1><br>
  <app-child [childmsg]="parent" [msg]="msg" ></app-child><br><hr>
  <button value="change" (click)="change()">click</button>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  

    parent="i love you";
    msg="i like you"
  change()
  {
    this.parent="i hate you";
    this.msg="we hate you";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
