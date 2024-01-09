import { Component, OnInit } from '@angular/core';
import { UdemyService } from '../udemy/udemy.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemsList: any = [];
  
  constructor(private udemyService: UdemyService) {

  }
  ngOnInit() {

    this.udemyService.itemsInCart$.subscribe(
      (cartItems) => {
        this.cartItemsList = cartItems;
        console.log(this.cartItemsList);
      } 
    );
    
  }



}
