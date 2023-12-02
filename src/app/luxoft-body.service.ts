import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LuxoftBodyService {

  constructor(private httpClient: HttpClient) { }
  aboutOurCompany( ) {
    console.log('is it working');
    return this.httpClient.get('https://api.irail.be/vehicle/?id=BE.NMBS.IC1832&format=json&lang=en&alerts=false');
  }
}
