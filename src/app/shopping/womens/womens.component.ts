import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent {
  constructor(private router: Router) {

  }

  navigateTokurthi() {
    this.router.navigate(['womens/kurthi'])

  }

  navigateTosaree() {
    this.router.navigate(['womens/saree'])

  }

  navigateToskirts() {
    this.router.navigate(['womens/skirts'])

  }

}
