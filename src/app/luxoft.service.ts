import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LuxoftService {

  constructor(private httpClient: HttpClient) { }
  industries() {
    console.log('is it working');
    return this.httpClient.get('https://api.irail.be/vehicle/?id=BE.NMBS.IC1832&format=json&lang=en&alerts=false');
  }
  services() {}
  
}
