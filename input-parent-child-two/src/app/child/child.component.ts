import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent: string;
  @Output() childNotify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onChangeValue(msg) {
    this.childNotify.emit(msg);
    console.log(msg);
  }

  ngOnInit() {
  }

}
