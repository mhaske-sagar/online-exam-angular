import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DjangoService } from '../django.service';
import { Student } from '../django.service';

@Component({
  selector: 'app-parent-d',
  templateUrl: './parent-d.component.html',
  styleUrls: ['./parent-d.component.css']
})


export class ParentDComponent implements OnInit {

  student:Student[]=[];
  selectp:string="";
  gender:string="";

  changep(select:string)
  {
    this.selectp=select;
  }


  constructor(private s:DjangoService) { 

  
  
  }

    
  


  ngOnInit(): void {
    this.s.getList().subscribe(response=>this.student=response)
  }
  tmale()
  {
    return this.student.filter(student=>student.gender=="male").length;
  }
  fmale()
  {
    return this.student.filter(student=>student.gender=="female").length;
  }

}
