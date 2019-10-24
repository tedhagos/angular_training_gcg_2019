import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-parent-child-two';
  msgFromChild:any;

  onNotify(payload) {
    this.msgFromChild = payload;  
  }
}
