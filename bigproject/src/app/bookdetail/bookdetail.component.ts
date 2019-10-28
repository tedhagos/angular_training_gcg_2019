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
      bserv.getBook(bookid).subscribe(
        book => this.book = book,
        error => console.log(error)
      );
  }

  ngOnInit() {

  }

  goBack() {
    this.router.navigate(['/booklist']);
  }
}
