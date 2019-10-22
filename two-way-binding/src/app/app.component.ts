import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <input 
      [value]="name" 
      (input)="changeName($event.target.value)" 
      type="text"><br/>
    <input 
      [value]="name" 
      (input)="name=$event.target.value" 
      type="text">  
      `
})
export class AppComponent {
  name: string = "John Doe"
  
  changeName(name) {
    this.name = name;
  }
}