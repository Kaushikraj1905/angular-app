import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent {


  constructor(private router: Router) {

  }

  navigateToTops() {
    this.router.navigate(['mens/tops'])

  }

  navigateToBottoms() {
    this.router.navigate(['mens/bottoms'])

  }

  navigateToCoats() {
    this.router.navigate(['mens/coats'])

  }
  

}

// mens 4 - 4mb
// womens 4  - 4mb
// kids 6 - 6mb
// sale 6 - 6mb

// 20 MB




