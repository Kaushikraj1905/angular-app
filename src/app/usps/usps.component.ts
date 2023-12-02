import { Component } from '@angular/core';

@Component({
  selector: 'app-usps',
  templateUrl: './usps.component.html',
  styleUrls: ['./usps.component.css']
})
export class UspsComponent {
   usps()  {
    console.log('usps is ......')
   }
   uspsId: number = 12345;
   uspsLocation: String = 'texas';
   uspsStatus: boolean = true;
   uspsZipCodes: number[] = [321, 125, 592, 357];
   uspsBranchs: string[] = ['dallas', 'plano', 'irving', 'frisco'];

   

}
