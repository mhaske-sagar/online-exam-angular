import { Component } from '@angular/core';
import { ServerclientService } from './server/serverclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  show:boolean;
  constructor(private a:ServerclientService){

  this.show=a.show
  }
  
}
