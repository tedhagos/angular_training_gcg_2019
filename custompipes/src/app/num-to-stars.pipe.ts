import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToStars'
})
export class NumToStarsPipe implements PipeTransform {

  transform(num): any {
    let ret ="";
    for (let i=1; i<=num; i++) {
      ret += '\u2605'; // this is the code for a star char in HTML elements
    }
    return ret;
  }
}
