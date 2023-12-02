import { Component, inject } from '@angular/core';
import { LuxoftService } from '../luxoft.service';


@Component({
  selector: 'app-luxoft',
  templateUrl: './luxoft.component.html',
  styleUrls: ['./luxoft.component.css']
})
export class LuxoftComponent {
  LuxoftComponent: any;
  constructor (){

  }
    industries() {
    console.log('kaushik!!!')
    this.LuxoftComponent.industries().subscribe(
      (success) => {
        console.log(success);
      },
      (failure) => {
        console.log(failure);
      }
    );
     
    }
    services() {

    }
    LuxoftService = inject(LuxoftService);
}
