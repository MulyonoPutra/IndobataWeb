import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent implements OnInit {
  public emptyImage = true;
  public gentengBeton = false;
  public pavingBlock = false;

  constructor() {}

  ngOnInit(): void {
    this.emptyImage = true;
  }

  showGentengImage() {
    this.gentengBeton = true;
    this.pavingBlock = false;
    this.emptyImage = false;
  }

  showPavingImage() {
    this.pavingBlock = true;
    this.gentengBeton = false;
    this.emptyImage = false;
  }
}
