import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <input [(ngModel)] = 'fno' type='text'><br />
    <input [(ngModel)] = 'sno' type='text'><br/>
    <button (click) = 'calc()'>Calc</button>
    <hr/>
    big number = {{bigno}} <br/>
    small number = {{smallno}}
    <h2>GCF is {{gcf}}</h2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice';
  fno : number;
  sno : number;
  bigno :number;
  smallno : number
  gcf : number;
  // rem : number;

  calc() {
    if (this.fno > this.sno) {
      this.bigno = this.fno;
      this.smallno = this.sno;
    }
    else {
      this.bigno = this.sno;
      this.smallno = this.fno;
    }

    // this.rem = this.bigno % this.smallno;

    // while(this.rem != 0) {
    //   this.bigno = this.smallno;
    //   this.smallno = this.rem;
    //   this.rem = this.bigno % this.smallno;
    // }
    // this.gcf = this.smallno;

    let rem = this.bigno % this.smallno;
    while (rem != 0) {
      this.bigno = this.smallno;
      this.smallno = rem;
      rem = this.bigno % this.smallno;
    }
    this.gcf = this.smallno;
  }
}
