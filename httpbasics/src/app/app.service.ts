import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl: string = "/api/books.json";
  
  constructor(private http: HttpClient) {}

  getBooks():Observable<any> {
    return this.http.get(this.bookUrl);
  }  
}