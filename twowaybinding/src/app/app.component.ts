import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  name = 'John Doe';
  street: string = "123 Main Street";
  city: string = "Makati";
  region: string;
  @ViewChild('regionref', {static:true}) regionElementRef: ElementRef;

  changeRegion(region) {
    this.region = region;
  }

  ngAfterViewInit() {
    // this.region = this.regionElementRef.nativeElement.value
  }

  ngOnInit() {
    this.region = this.regionElementRef.nativeElement.value
  }
}
