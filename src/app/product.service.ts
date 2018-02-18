import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {
	
	private productsUrl = 'api/products'; 

    constructor(
  		private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
    	return this.http.get<Product[]>(this.productsUrl)
    }

	getProduct(id: number): Observable<Product> {
	  const url = `${this.productsUrl}/${id}`;
	  return this.http.get<Product>(url)
	}

	updateProduct (product: Product): Observable<any> {
 		return this.http.put(this.productsUrl, product, httpOptions)
	}

	searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Product[]>(`api/heroes/?name=${term}`);
  }
}
