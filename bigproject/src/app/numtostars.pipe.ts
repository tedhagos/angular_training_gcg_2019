import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numtostars'
})
export class NumtostarsPipe implements PipeTransform {

  transform(num): any {
    let ret = "";
    for (let i = 1; i< num; i++) {
      ret += "*";
    }
    return ret;
  }
}
