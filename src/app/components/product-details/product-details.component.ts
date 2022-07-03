import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/module/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number = 1;
  product: Product;
  amount: number = 1;

  faCart = faCartPlus; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private modalService: NgbModal
  ) {
    this.product = {
      id: 1,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      amount: 1
    }
  }

  ngOnInit(): void {
    // get the id from router
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    // use the id to get the product information
    this.productService.getProductFromFakeAPIById(this.id).subscribe(product => {
      this.product = product;
    });
  }

  // update the amount
  addAmount(): void {
    this.amount++;
  }

  minusAmount(): void {
    this.amount--;
  }

  addProductToCart(product: Product, content: any): void {
    product.amount= this.amount;
    this.cartService.addProductToCart(product);
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'sm' });
  }

}
