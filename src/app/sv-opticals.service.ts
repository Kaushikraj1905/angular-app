import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvOpticalsService {

  constructor(private httpClient: HttpClient) { }

  Rayban() {
    console.log('Sunglass');
    return this.httpClient.get('http://universities.hipolabs.com/search?country=United+Kingdom');
  }
}
