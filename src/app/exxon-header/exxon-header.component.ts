import { Component } from '@angular/core';
import { ExxonHeaderService } from '../exxon-header.service';
@Component({
  selector: 'app-exxon-header',
  templateUrl: './exxon-header.component.html',
  styleUrls: ['./exxon-header.component.css']
})
export class ExxonHeaderComponent {
  lithium() {
    console.log('lithium is working...')
  }
  // performAction() {
  //   const result = this.lithium();
  //   console.log(result);
  // }

}
