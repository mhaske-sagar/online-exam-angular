import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlename'
})
export class TitlenamePipe implements PipeTransform {



  transform(value: string,gender:string): string {
    if (gender.toLowerCase()=="male")
    return "Mr.  " + value;
    else 
    return "Miss  "+value;


  }

}
