import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private s:FormBuilder) { }

  ngOnInit(): void {
  }
  profileForm=this.s.group(
  {

    firstname:["Sagar"],
    lastname:["Mhaske"],

    address:this.s.group(
    {
      village:["loni bk"],
      street:["bus stand"],
      taluka:["rahata"],
      dist:["ahmednagar"],
    
  }),

  
})
focus()
{
  //this.profileForm.setValue({firstname:"lakhan",lastname:"gulave",address:{village:"pathare",street:"pathare",taluka:"rahata",dist:"angar"}});
  //console.log(this.profileForm.controls["firstname"].value);
  this.profileForm.patchValue({firstname:"ram"});
  console.log(this.profileForm.controls["firstname"].value);
}

  
}
