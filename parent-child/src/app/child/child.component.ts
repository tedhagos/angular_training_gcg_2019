import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() dataFromParent: string;
  @Output() onNotify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    console.log(`CTOR data from parent ${this.dataFromParent}`);
  }
  ngOnInit() {
    
  }
  ngOnChanges(): void {
    console.log(`data from parent is ${this.dataFromParent}`);
  }
  sendData(msg) {
    console.log(`sendData : ${msg}`);
    this.onNotify.emit(msg);
  }

}
