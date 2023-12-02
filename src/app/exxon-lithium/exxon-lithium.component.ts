import { Component } from '@angular/core';
import { ExxonLithiumService } from '../exxon-lithium.service';
@Component({
  selector: 'app-exxon-lithium',
  templateUrl: './exxon-lithium.component.html',
  styleUrls: ['./exxon-lithium.component.css']
})
export class ExxonLithiumComponent {
  whoWeAre() {
    console.log('who we are')
  }
  // performAction() {
  //   const result = this.whoWeAre();
  //   console.log(result);
  // }


}
