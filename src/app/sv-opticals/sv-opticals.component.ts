import { Component, inject } from '@angular/core';
import { SvOpticalsService } from '../sv-opticals.service';

@Component({
  selector: 'app-sv-opticals',
  templateUrl: './sv-opticals.component.html',
  styleUrls: ['./sv-opticals.component.css']
})
export class SvOpticalsComponent {

  universityList: any = [];
  countryName: string = '';

  testData: any = [
    {name: 'test1', id: '1'}, //0
    {name: 'test2', id: '2'}, //1
    {name: 'test3', id: '3'}, //2 
  ];

  // rename this function and follow naming convention
  Rayban() {
 console.log(this.countryName)

    this.SvOpticalsService.Rayban(this.countryName).subscribe(
      (success) => {
        console.log(success);
        console.log(this.universityList.length);
        this.universityList = success;
        console.log(this.universityList.length);

      },
      (error) => {
        console.log('error');
      }
    )
  }
  
  SvOpticalsService = inject(SvOpticalsService);
 

}
