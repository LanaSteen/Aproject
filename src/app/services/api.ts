import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient){}
 
  private baseUrl = " https://api.everrest.educata.dev/shop/"
 
// products/all?page_index=1&page_size=6

  getProducts(url : string){
  return this.http.get(this.baseUrl + url)

  }


// https://api.everrest.educata.dev/shop/products/id/6526cb4e57e3ec956179e70f

}
