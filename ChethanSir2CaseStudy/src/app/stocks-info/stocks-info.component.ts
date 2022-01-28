import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-stocks-info',
  templateUrl: './stocks-info.component.html',
  styleUrls: ['./stocks-info.component.css']
})
export class StocksInfoComponent implements OnInit {
  value;
  dates;
  id;
  bharat: any;
  kurma;
  selectedStock: any;
  open: any;
  high: any;
  low: any;
  close: any;
date;
Addvalue;
Bharat;

  constructor(private data:StocksService,) { }
  
    ngOnInit(): void {
      // this.http.get.subscribe((res)=>{

      // })
    }
//   sendToService(){
//   this.stock.onRequest(this.value);
//   this.stock.getStock(this.value).subscribe((res)=>{
//     this.dates=res.value;
    
//     console.log(res);
    
    
    
//   })
// }

getDataSer(){
  this.data.getStock(this.value).subscribe((res)=>{
  
console.log(this.dates=res.data);

  })
}

PostDataSer(){

  const newobj={
    date:this.date,
    open:this.open,
    high:this.high,
    low:this.low,
    close:this.close
    
  }
  this.data.PostStock(newobj).subscribe((bha)=>{
    console.log(bha);
    
  })

}
OndeleteSer(kurma){
  console.log(kurma);
  
  this.data.DeleteStock(kurma).subscribe((ris)=>{
    if(!ris.error){

this.dates.splice(this.data.indexof(kurma),1)
    }

  })
}
onUpdate(value){
  console.log(value);
  
  this.selectedStock=value;
}


  
  }







