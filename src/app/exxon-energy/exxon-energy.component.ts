import { Component } from '@angular/core';
import { ExxonEnergyService } from '../exxon-energy.service';

@Component({
  selector: 'app-exxon-energy',
  templateUrl: './exxon-energy.component.html',
  styleUrls: ['./exxon-energy.component.css']
})
export class ExxonEnergyComponent {
  exxonmobil() {
    console.log('welcome to exxonmobil')
  }
  // performAction() {
  //   const result = this.exxonmobil();
  //   console.log(result);
  // }

}
