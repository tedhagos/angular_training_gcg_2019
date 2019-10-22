import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  lastname: string = "Doe";
  firstname: string = "John"
  street:string = "123 Main street";
  city: string = "Makati";
  region: string = "NCR";
  imageUrl: string = "./assets/images/john_doe.png";
  imageWidth: string = "100px";
  hiddenAddress = true;
  buttonLabel:string="hide";
  @ViewChild('regEl',{static:true}) regElement:ElementRef;

  books:any[] = [
    "Crime and Punishment",
    "War and Peace",
    "Nicholas Nickleby"
  ]

  changeRegion(region) {
    this.region = region;
  }
  hideAddress() {
    this.hiddenAddress = !this.hiddenAddress;
    this.buttonLabel = this.buttonLabel === "hide"?"show":"hide";
  }

  ngAfterViewInit(): void {
    this.regElement.nativeElement.value = this.region;
  }  

  ngOnInit(): void {
    // this.regElement.nativeElement.value = this.region;
  }
}
