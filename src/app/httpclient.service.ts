import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class Student
{
  constructor
  (public rno:number,
  public marks:number,

  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {



  constructor(private httpclient:HttpClient) { }
  getdata()
  {
   return this.httpclient.get<Student>("http://127.0.0.1:8000/hello/");
  }
  postdata(student:Student)
  {
    alert(student.rno + "  "+student.marks);
    return this.httpclient.post<String>("http://127.0.0.1:8000/reciver",student);
  
    

  }
  
}
