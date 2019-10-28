import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books;
  tempbooks;

  constructor(private service: BookserviceService) {
   }

  ngOnInit() {
    this.service.getBooks().subscribe(
      books => {
        this.books = books;
        this.tempbooks = this.books;  
      },
      error => console.log(error)
    );
  }

  filterBooks(search) {
    let tempb = [...this.books];
    tempb = tempb.filter((book) => 
    book.name.toLocaleLowerCase().indexOf(search) !== -1);
    this.tempbooks = tempb;
  }

}
