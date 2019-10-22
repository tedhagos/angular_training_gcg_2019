import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Hello</h1>
      <h2> {{ title }} </h2>
      `
})
export class MyComponent {
  title = "Hello too";
}
