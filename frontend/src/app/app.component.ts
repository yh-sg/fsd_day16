import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { cartItem } from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contents:cartItem[] = [];

  // fb - Service, dependency injection
  constructor(private http:HttpClient){}

  async ngOnInit(){
    //convert to promise
    //<> is generics, type of returns, returns observable
    this.contents = await this.http.get<cartItem[]>('http://localhost:3000/cart')
      .toPromise()
    console.log(this.contents);  
  }

  title = 'frontend';

  getId(id){
    console.log(id);
  }
}
