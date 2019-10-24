import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  @Input() bookDetail: any;
  
  constructor() { }

  ngOnInit() {
  }

}
