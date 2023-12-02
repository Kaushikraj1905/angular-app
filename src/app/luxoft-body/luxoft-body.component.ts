import { Component } from '@angular/core';
import { LuxoftBodyService } from '../luxoft-body.service';
@Component({
  selector: 'app-luxoft-body',
  templateUrl: './luxoft-body.component.html',
  styleUrls: ['./luxoft-body.component.css']
})
export class LuxoftBodyComponent {
  LuxoftBodyComponent: any;
  aboutOurCompany( ) {

    console.log('kaushik!!!')
    this.LuxoftBodyComponent.aboutOurCompany().subscribe(
      (success) => {
        console.log(success);
      },
      (failure) => {
        console.log(failure);
      }
    );
  }
 
}
