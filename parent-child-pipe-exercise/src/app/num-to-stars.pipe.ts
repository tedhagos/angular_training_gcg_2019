import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToStars'
})
export class NumToStarsPipe implements PipeTransform {

  transform(num): any {
    let retval:string = "*";
    for(let i=1;i<=num;i++) {
      retval +="*";
    }
    return retval;
  }

}
