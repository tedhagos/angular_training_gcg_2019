import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumToEnglish } from './app.pipes.eng';
import { TestPipe } from './app.pipe.test';
import { NumToStarsPipe } from './num-to-stars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumToEnglish, 
    TestPipe, NumToStarsPipe   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
