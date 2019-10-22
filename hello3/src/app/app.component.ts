import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello3';
  
  firstnum : number;
  secondnum : number;
  gcf : number;
  // rem : number;

  calculate() {
    let bigno = 0;
    let smallno = 0;
    if (this.firstnum > this.secondnum) {
      bigno = this.firstnum;
      smallno = this.secondnum;
    }
    else {
      bigno = this.secondnum;
      smallno = this.firstnum;
    }

    let rem = 1;
    while ((rem = bigno % smallno) != 0) {
      bigno = smallno;
      smallno = rem;
      console.log(rem);
    }
    this.gcf = smallno
  }
}
