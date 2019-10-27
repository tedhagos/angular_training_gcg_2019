import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService implements OnInit {

  booksUrl: string = "/api/books.json";
  books: any[];

  tempbooks: any[];
  constructor(private http:HttpClient) {
    
  }

  ngOnInit() {

  }

  getBook(id) {
    // let tempbooks = this.books;
    // return this.tempbooks.find((book) => book.id === id);
    // let tempbooks = this.getBooks()
  }

  getBooks():Observable<any>{
    return this.http.get(this.booksUrl);
  }

  
}
