import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoolService {

  constructor(private http:HttpClient) { }


  PostDat(product: { id: any; productName: any; productBrand: any; price: any; }){
    return this.http.post<any>('http://localhost:3000/products',product)
  }
  
UpdatePro(id: any,product: any){
  return this.http.put<any>('http://localhost:3000/products/'+id,product );
}
deletePro(id: any){
  return this.http.delete<any>('http://localhost:3000/products/'+id)
}
  
}
