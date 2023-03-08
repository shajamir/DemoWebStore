import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit //, OnDestroy 
{  
  // subscription: Subscription
  // products: IProduct[] = []
  products$: Observable<IProduct[]>

  constructor(private productService: ProductService) {}

  addToCart(product: IProduct): void {
    console.log(product);
  }

  ngOnInit(): void {
    // this.subscription = this.productService.getProducts().subscribe((products: IProduct[]) => { this.products = products })
    this.products$ = this.productService.getProducts();
  }

  // ngOnDestroy(): void {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
}