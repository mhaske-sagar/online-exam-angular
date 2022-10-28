import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Student
{
  constructor(
    public uid:number,
    public name:string,
    public gender:string,
  ){}
}


@Injectable({
  providedIn: 'root'
})


export class DjangoService {



  constructor(private s:HttpClient ) 
  { }
  getList()
  {
   return this.s.get<Student[]>("http://127.0.0.1:8000/data/");
  }
}
