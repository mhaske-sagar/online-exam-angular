import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  myaccount1:Account=new Account;
 
  amount:number=0;
  account2:Account=new Account;
  
  

  credit()
  {
   

  this.myaccount1.deposit(this.amount);

    
  }
  
 
  debate()
  {
    //this.balance1)=(this.balance1) - (this.amount);

  }
  transfer(){
    this.myaccount1.deduct(this.amount);
    this.account2.deduct(this.amount);
  }







  constructor() { 
    
  
  }

  ngOnInit(): void {
  }

}
export class Account{
  myaccount1:number;
  balance1:number;
  
  account2:number;
  balance2:number;

  constructor(){
    this.myaccount1=1;
    this.balance1=1000;
    this.account2=2;
    this.balance2=500;
  }


  show()
  {
    alert("this is acc " + this.myaccount1 +" balance " + this.balance1)
  }
  deposit(amount:number)

  {
    this.balance1=this.balance1 + amount ;
  }

  deduct(amount:number)
  {
    (this.balance1)=(this.balance1) - (amount);
    (this.balance2)=(this.balance2) + (amount);
  }
  
 
}