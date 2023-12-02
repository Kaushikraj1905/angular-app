import { Component, inject } from '@angular/core';
import { LuxoftServicesService } from '../luxoft-services.service';

@Component({
  selector: 'app-luxoft-services',
  templateUrl: './luxoft-services.component.html',
  styleUrls: ['./luxoft-services.component.css']
})
export class LuxoftServicesComponent {
  qA_Automation() {
    throw new Error('Method not implemented.');
  }
  dataAnalytics() {
    console.log("Benefit from our expertise in data analytics to address any business challenge with meaningful insights");
  }
  javaUI() {
    console.log("Benefit from our expertise in Angular");
  }
  softwareEngineering() {
    console.log("Leverage the best software engineering capabilities to build bespoke and secure solutions");
  }
  LuxoftServicesService = inject(LuxoftServicesService);


}
