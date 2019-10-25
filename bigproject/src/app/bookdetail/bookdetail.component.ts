import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  constructor(private bserv: BookserviceService,
              private route: ActivatedRoute,
              private router: Router) {   
              }

  book: {};

  ngOnInit() {
    let bookid = this.route.snapshot.paramMap.get('id');
    console.log(bookid);
    this.book = this.bserv.getBook(+bookid);
  }

  goBack() {
    this.router.navigate(['/booklist']);
  }
}
