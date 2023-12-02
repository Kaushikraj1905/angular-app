import { Component, inject } from '@angular/core';
import { SiraIncService } from '../sira-inc.service';

@Component({
  selector: 'app-sira-inc',
  templateUrl: './sira-inc.component.html',
  styleUrls: ['./sira-inc.component.css']
})
export class SiraIncComponent {
  coinMap: any = [];

  testData: any = [
    {string: 'kaushik', number: 10}, //0
    {string: 'nithin', number: 11}, //1
    {string: 'bhargav', number: 12}, //2 
  ];
  jobsWeOffer() {
    this.testData[1].string
    this.testData[2].number
    console.log('kaushik')
    this.SiraIncService.jobsWeOffer().subscribe(
      (success) => {
        console.log(success);
        console.log(this.coinMap.length);
        this.coinMap = success['networks'];
        console.log(this.coinMap.networks);
        // 

      },
      (error) => {
        console.log('error');
      }
    )
  
  }
  
  SiraIncService = inject(SiraIncService);

}
