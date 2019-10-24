import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent Component';
  passToChild: string;
  msgFromChild: string;

  passData(data) {
    this.passToChild = data;
    console.log(data);
  }

  processData(payload){
    this.msgFromChild = payload;
  }
}
