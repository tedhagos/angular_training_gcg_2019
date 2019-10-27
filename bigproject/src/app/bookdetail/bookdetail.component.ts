import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  
  book: {};
  books: any[];
  
  constructor(private bserv: BookserviceService,
              private route: ActivatedRoute,
              private router: Router) {   

      let bookid = this.route.snapshot.paramMap.get('id');
      console.log(`bookid= ${bookid}`);
      this.bserv.getBooks().subscribe(
        books =>  {
          this.books = books;
          this.book = books.find((book) => book.id === +bookid);
          // console.log(books);
          console.log(this.book);
        },
        error => console.log(error)
      );
  }



  ngOnInit() {
    // let bookid = this.route.snapshot.paramMap.get('id');
    // console.log(bookid);
    // // this.book = this.bserv.getBook(+bookid);
    // this.bserv.getBooks().subscribe(
    //   books =>  {
    //     this.books = books;
    //     this.book = books.find(book => book.id === bookid);
    //   },
    //   error => console.log(error)
    // );
  }

  goBack() {
    this.router.navigate(['/booklist']);
  }
}
