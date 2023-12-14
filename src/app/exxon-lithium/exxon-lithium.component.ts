import { Component } from '@angular/core';
import { ExxonLithiumService } from '../exxon-lithium.service';
@Component({
  selector: 'app-exxon-lithium',
  templateUrl: './exxon-lithium.component.html',
  styleUrls: ['./exxon-lithium.component.css']
})
export class ExxonLithiumComponent {

  name: string = 'Kaushik';

  constructor() {
    this.addtwoNumbers(2,2);
  }
  whoWeAre() {
    console.log('who we are')
  }
  // performAction() {
  //   const result = this.whoWeAre();
  //   console.log(result);
  // }

  addtwoNumbers(n1: number, n2: number) {
    let result = 0;
    result = n1+n2;
    console.log(result);
  }


}
