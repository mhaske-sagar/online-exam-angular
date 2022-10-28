import { Component, OnInit } from '@angular/core';
import { Account } from '../account/account.component';
@Component({
  selector: 'app-interfaceex',
  templateUrl: './interfaceex.component.html',
  styleUrls: ['./interfaceex.component.css']
})
export class InterfaceexComponent implements OnInit {

  myaccount:Account=new Account;

  
  


  constructor() { }

  ngOnInit(): void {
    this.myaccount.show();
    this.myaccount.deposit(3000);
    this.myaccount.show();
  
  
  }

}
