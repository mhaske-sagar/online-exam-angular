import { UpperCasePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class Userdata{

  constructor(public username:string,public password:string,public mobile_no:number){}
}
export class Data{

  constructor(public username:string,public password:string){}
}


@Injectable({
  providedIn: 'root'
})
export class ServerclientService {
  show:boolean=true;
  headers_object:HttpHeaders=new HttpHeaders().set("Authorization","Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1Mjk1NjQ5LCJpYXQiOjE2NjUyOTUzNDksImp0aSI6IjQ2NDAzOGU0M2VjMDRlYzJhNWY2MzBmOGViOGIwYWIxIiwidXNlcl9pZCI6MX0.uz7u-asE9GCLhWyN9HF0fRrzK1uSUilrLiTLRUVeMYA")

  constructor(private httpclient:HttpClient) { }
  
  public log(use:Data)
  {
    return this.httpclient.post<String>("http://127.0.0.1:8000/log",use)
  }
  
  public getalluser()
  {
    return this.httpclient.get<Userdata[]>("http://127.0.0.1:8000/getalluser1",{headers:this.headers_object});
  }
  public adduser(users:Userdata)
  {
    return this.httpclient.post<Userdata>("http://127.0.0.1:8000/adduser1",users)
  }
  public views(username:String)
  {
    return this.httpclient.get<Userdata>("http://127.0.0.1:8000/getuser1/"+username)
  }
  public update(users:Userdata)
  {
    return this.httpclient.put<Userdata>("http://127.0.0.1:8000/updateuser1",users)
  }
  public Delete(username:String)
  {
    return this.httpclient.delete<String>("http://127.0.0.1:8000/delete/"+username)
  }

}
