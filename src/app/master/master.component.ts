import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private s:FormBuilder) { }

  ngOnInit(): void {
  }
  form=this.s.group(
    {
  
      username:[""],
      password:[""]
    }
  )
  submit()
  {
    
  }
}
