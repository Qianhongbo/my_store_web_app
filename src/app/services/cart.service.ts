import { Injectable } from '@angular/core';
import { Product } from '../module/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor() { }

  getCartProducts(): Product[] {
    this.products = JSON.parse(localStorage.getItem("myStoreCart") || '{}');
    return this.products;
  }

  addProductToCart(product: Product): void {
    let exist = 0;

    this.products.forEach(p => {
      if (p.id == product.id) {
        p.amount += product.amount;
        exist = 1;
      }
    });

    if (!exist) {
      this.products.push(product);
    }
    
    this.saveCartToLocalStorage();
  }

  removeProductFromCart(product: Product): void {
    this.products = this.products.filter(p => p.id != product.id);
    this.saveCartToLocalStorage();
  }

  clearCart(): void {
    this.products = [];
    this.saveCartToLocalStorage();
  }

  changeAmount(newAmount: number, id: number): void {
    this.products = this.products.map(p => {
      if (p.id == id) {
        p.amount = newAmount;
      }
      return p;
    });
    this.saveCartToLocalStorage();
  }

  saveCartToLocalStorage() {
    localStorage.setItem("myStoreCart", JSON.stringify(this.products));
  }
}
