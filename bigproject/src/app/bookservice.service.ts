import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  // booksUrl: string = "/api/books.json";
  booksUrl: string = "http://localhost:3000/books";
  books: any[];

  tempbooks: any[];
  
  constructor(private http:HttpClient) {
  }

  getBook(id) {
    return this.http.get(`${this.booksUrl}/${id}`);
  }

  getBooks():Observable<any>{
    return this.http.get(this.booksUrl);
  }  
}
