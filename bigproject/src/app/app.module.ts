import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NumtostarsPipe } from './numtostars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookdetailComponent,
    PagenotfoundComponent,
    NumtostarsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
