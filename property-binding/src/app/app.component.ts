import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{lastname}} , {{firstname}}</h1>
    <img [hidden]="hiddenImage"
         [src]="imageUrl" 
         [style.width]="imageWidth"><br/>
    <button (click)="hideClick()">show/hide</button>
  `
})
export class AppComponent {
  lastname: string = "Doe";
  firstname: string =  "John";
  imageUrl: string = "/assets/img/john_doe.png";
  imageWidth: string = "80px";
  hiddenImage: boolean = false;

  hideClick() {
    this.hiddenImage = !this.hiddenImage;
  }
}
