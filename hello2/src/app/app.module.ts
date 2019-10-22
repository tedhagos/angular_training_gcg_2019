import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MyComponent } from './app.component';

@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyComponent]
})
export class AppModule { }
