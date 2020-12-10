import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  // @Input() productInfo: string;
  // @Input("qty") quantity: number = 122;
  // @Input() price: string;

  @Output('ParentFunctionPassed') handleEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  PassEventToParent() {
    this.handleEvent.emit();
  }

}
