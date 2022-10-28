import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  students:any[]=[{"rno":1,"name":'sagar',"photo":"assets/images/j1.png"},{"rno":2,"name":'nikhil',"photo":"assets/images/j2.jpg"}]

  constructor() { }

  ngOnInit(): void {
  }

}
