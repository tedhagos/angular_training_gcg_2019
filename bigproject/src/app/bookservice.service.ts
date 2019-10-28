import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService implements OnInit {

  // booksUrl: string = "/api/books.json";
  booksUrl: string = "http://localhost:3000/books";
  books: any[];

  tempbooks: any[];
  
  constructor(private http:HttpClient) {
    
  }

  ngOnInit() {

  }

  getBook(id) {
    return this.http.get(`${this.booksUrl}/${id}`);
  }

  getBooks():Observable<any>{
    return this.http.get(this.booksUrl);
  }

  
}
