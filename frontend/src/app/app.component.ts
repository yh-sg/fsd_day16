import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from './cart.service';
import { cartItem } from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contents:cartItem[] = [];
  contentList:cartItem;

  // fb - Service, dependency injection
  // constructor(private http:HttpClient){}
  constructor(private cartSvc:CartService){}

  async ngOnInit(){
    //convert to promise
    //<> is generics, type of returns, returns observable

    // this.contents = await this.http.get<cartItem[]>('http://localhost:3000/cart')
    //   .toPromise()
    this.contents = await this.cartSvc.getCart();
    console.log(this.contents); 
  }

  title = 'frontend';

  async getId(id){
    console.log(id);
    // GET /cart/:id
    // this.contentList = await this.http.get<cartItem>(`http://localhost:3000/cart/${id}`)
    // .toPromise()
    this.contentList = await this.cartSvc.getItem(id)

  }

  async updateItem(value: cartItem){
    console.log(value);

    //PUT /cart/:id
    // await this.http.put<any>(`http://localhost:3000/cart/${value.id}`, value)
    //   .toPromise()

    //refresh the list
    // this.contents = await this.http.get<cartItem[]>('http://localhost:3000/cart')
    //   .toPromise()

    await this.cartSvc.updateItem(value.id, value)
    this.contents = await this.cartSvc.getCart();
  }

  async deletedItem(id){
    // console.log(e);
    await this.cartSvc.deleteItem(id)
    this.contents = await this.cartSvc.getCart();
  }

  async addedItem(value:cartItem){
    await this.cartSvc.addItem(value.id, value)
    this.contents = await this.cartSvc.getCart();
  }
}
