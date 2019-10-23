import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() rating: number;
  starWidth:number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
  }
}
