import { Component, OnInit } from '@angular/core';
import { BookService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basicservice';
  books: any[];
  
  constructor(private bookService: BookService){
  }
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
