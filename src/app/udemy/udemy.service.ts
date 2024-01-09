import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UdemyService {

  private itemsInCartBs = new BehaviorSubject<any>([]);
  itemsInCart$ = this.itemsInCartBs.asObservable();

  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get('http://universities.hipolabs.com/search?country=United Kingdom');
  }

  addItemToCart(item: any) {
    let itemsInCart = this.itemsInCartBs.value;
    itemsInCart.push(item)
    
    this.itemsInCartBs.next(itemsInCart);
  }

  removeItemFromCart(name: string) {
    console.log('items in cart: ', this.itemsInCartBs.value);
    console.log('items to be removed:',  name);
  let itemsInCart: any[] = this.itemsInCartBs.value;
  let index = itemsInCart.findIndex((item) => item.name === name);
  itemsInCart.splice(index,1);
  this.itemsInCartBs.next(itemsInCart);



    
    

  }


}
