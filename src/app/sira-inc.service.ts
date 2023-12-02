import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SiraIncService {
  
  constructor(private httpClient: HttpClient) { }

  jobsWeOffer( ) {
    console.log('hello sira')
    return this.httpClient.get('https://api.citybik.es/v2/networks');
  }
  
}
