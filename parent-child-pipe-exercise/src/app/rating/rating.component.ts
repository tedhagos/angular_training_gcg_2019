import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() starRating: number;
  constructor() { }

  ngOnInit() {}
  ngOnChanges() {  }
}
