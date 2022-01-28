import { Component, OnInit } from '@angular/core';
import { CoolService } from '../cool.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
products: any;

  constructor(private Stock:CoolService) { }

  
  id: any;
  name: any;
  brand: any;
  price: any;
    ngOnInit(): void {
      // this.getAllProducts();
    }
  // getAllProducts(){
  //  this.Stock.getProducts().subscribe((res)=>{
     
     
  // this.products=res;
  //  })
  // }
    
  addProduct(){
    const newObj={
      id: this.id,
      productName: this.name,
      productBrand :this.brand,
      price : this.price
    }
    this.Stock.PostDat(newObj).subscribe((res)=>{
      console.log(res);
      
    })
  }
  updateProduct(){
    const newObj={
      id: this.id,
      productName: this.name,
      productBrand :this.brand,
      price : this.price
    }
    this.Stock.UpdatePro(this.id,newObj).subscribe((res)=>{
      console.log(res);
      
    })
  }
  deleteProduct(){
  this.Stock.deletePro(this.id).subscribe((res)=>{
    console.log(res);
  })
  }
  }


