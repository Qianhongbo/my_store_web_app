import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/module/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  
  constructor() { 
    this.product = {
      // id: 1,
      // title: '',
      // price: 99999,
      // description: '',
      // category: '',
      // image: '',
      // amount: 0

      id: 1,
      name: '',
      price: 99999,
      url: '',
      description: ''
    };
   }

  ngOnInit(): void {
  }

}
