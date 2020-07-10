import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;
  @Output() productClick: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(){
  }
  addCart(){
    this.productClick.emit(this.product.id);
  }
}
