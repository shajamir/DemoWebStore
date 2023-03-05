import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product: IProduct
  @Output() onAddedToCart = new EventEmitter<IProduct>();

  addToCart() {
    this.onAddedToCart.emit(this.product);
  }
}
