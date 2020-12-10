import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  productInfo: string;
  quantity: number;
  salePrice: number;
  @ViewChild('productInfo') productInfotxt;

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCartClick() {
    // console.log(this.productInfotxt);
  }

  onParentCalled(){
    // console.log("Welcome User !!!");
    alert("Welcome User")
  }

}
