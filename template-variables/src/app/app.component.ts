import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <strong [style.color]="color">
      Favorite Color
    </strong>

    <select (change)="changeColor($event.target.value)">
      <option>red</option>
      <option>green</option>
      <option>blue</option>
    </select>
  `
})
export class AppComponent {
  color:string;

  changeColor(color:string) {
    this.color = color;
  }
}
