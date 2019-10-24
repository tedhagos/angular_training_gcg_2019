import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-pipe-exercise';
  ratings = [1,4,3,2,5,3.2,4.5];
}
