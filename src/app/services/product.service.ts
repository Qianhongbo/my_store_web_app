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

  getProducts(): Observable<Product[]> {
    console.log("test");
    return this.httpClient.get<Product[]>('../../../assets/data.json');
  }
}
