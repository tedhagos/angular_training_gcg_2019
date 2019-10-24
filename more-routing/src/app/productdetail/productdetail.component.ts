import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  pageTitle = "Product Detail Page:"

  constructor(private route: ActivatedRoute,
              private router:Router) {
  }

  goBack() {
    this.router.navigate(['/productlist']);
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.pageTitle += `: ${id}`;
  }
}
