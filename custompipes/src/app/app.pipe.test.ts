import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestPipe implements PipeTransform {
  transform(word:string,char1:string, char2:string) {
    let retval: string = "";
    retval =  word.replace(char1, char2);
    return retval;
  }
}