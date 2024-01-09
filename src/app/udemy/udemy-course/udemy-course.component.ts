import { Component, Input, OnInit } from '@angular/core';
import { UdemyService } from '../udemy.service';

@Component({
  selector: 'app-udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.scss']
})
export class UdemyCourseComponent implements OnInit {
  
  @Input() course: any = {};
  isAddedTocart: boolean = false;

  constructor(private udemyService: UdemyService) {

  }

  ngOnInit() {
    this.udemyService.itemsInCart$.subscribe(
    (cartItems) => {
      console.log(cartItems);
      console.log(this.course);
      this.isAddedTocart = cartItems.find((item) => item.name === this.course.name);
      
    }
    )
  }


  additemTocart() {
    this.udemyService.addItemToCart(this.course);
  }

  removeItemFromCart(name:string) {
    this.udemyService.removeItemFromCart(name);
  }

}
