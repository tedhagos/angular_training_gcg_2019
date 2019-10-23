import { Component, OnInit } from '@angular/core';
import { BookService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpbasics';
  books: any[];
  constructor(private bookservice:BookService){}

  ngOnInit() {
    this.bookservice.getBooks().subscribe(
      books => {
        this.books = books
      },
      error => {
        console.log(error);
      }
    );
  }
  
}
