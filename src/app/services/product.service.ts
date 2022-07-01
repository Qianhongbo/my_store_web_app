import { Injectable } from '@angular/core';
import { Product } from '../module/product';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private jsonFilePath: string = '../../../assets/data.json';
  constructor(private httpClient: HttpClient) { }

  // read the data from data.json file
  getProductsFromLocal(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('../../../assets/data.json');
  }

  // fetch data from fake products api
  getProductsFromFakeAPI(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

}
