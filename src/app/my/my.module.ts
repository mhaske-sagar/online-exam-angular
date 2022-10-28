import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';



@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstComponent,SecondComponent
  ]
})
export class MyModule { }
