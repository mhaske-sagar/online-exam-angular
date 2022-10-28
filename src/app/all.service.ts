import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  

  add(no1:number,no2:number):number
  {
    return no1 + no2
  }

  color:string="red";
  
  
  constructor() { }

  
}
