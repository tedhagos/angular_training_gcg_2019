import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books: any[];
  tempbooks: any[];

  constructor(private service: BookserviceService) {
    this.tempbooks = service.getBooks();
   }

  ngOnInit() {
    this.books = this.service.getBooks();
  }

  filterBooks(search) {
    let tempb = [...this.books];
    tempb = tempb.filter((book) => 
    book.name.toLocaleLowerCase().indexOf(search) !== -1);
    this.tempbooks = tempb;
  }

}
