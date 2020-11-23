import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartItem } from './models';

@Injectable()

export class CartService{
    constructor(private http: HttpClient){}

    async getCart(): Promise<cartItem[]>{
        return await this.http.get<cartItem[]>('http://localhost:3000/cart')
        .toPromise()
    }

    async getItem(id:string): Promise<cartItem>{
        return await this.http.get<cartItem>(`http://localhost:3000/cart/${id}`)
        .toPromise()
    }

    async updateItem(id: string, item: cartItem):Promise<any>{
        await this.http.put<any>(`http://localhost:3000/cart/${id}`, item)
        .toPromise()
    }

    async deleteItem(id: string): Promise<cartItem>{
        return await this.http.delete<cartItem>(`http://localhost:3000/cart/${id}`)
        .toPromise()
    }

    async addItem(id: string, item: cartItem):Promise<any>{
        await this.http.post<any>(`http://localhost:3000/cart/${id}`, item)
        .toPromise()
    }
}