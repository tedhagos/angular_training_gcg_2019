import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numToEnglish'
})
export class NumToEnglish implements PipeTransform {
  transform(num:number) {
    let retval:string = "";
    switch(num) {
      case 0:
        retval = "zero";
        break;
      case 1:
        retval = "one";
        break;
      case 2:
        retval = "two";
        break;
      case 3:
        retval = "three";
        break;
      case 4:
        retval = "four";
        break;
      case 5:
        retval = "five";
        break;
      default:
        "Nan"
    }
    return retval;
  }
}