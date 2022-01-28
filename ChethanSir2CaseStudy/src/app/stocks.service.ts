import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  indexof(kurma: any): any {
    throw new Error('Method not implemented.');
  }

  stock: any;
  id: any;
onRequest(value){
  this.stock=value;
}
  constructor(private BHAR: HttpClient) { }
  getStock(value){
    return this.BHAR.get<any>(`https://jsonmock.hackerrank.com/api/stocks?date=`+value)
  }
  PostStock(newobj){

return this.BHAR.post<any>(`https://jsonmock.hackerrank.com/api/stocks`,newobj);
  }
  UpdateStock(value){
    return this.BHAR.put<any>(`https://jsonmock.hackerrank.com/api/stocks/${value}`, value)
  }
  DeleteStock(value){
    return this.BHAR.delete<any>(`https://jsonmock.hackerrank.com/api/stocks/${value}`)
  }

}



