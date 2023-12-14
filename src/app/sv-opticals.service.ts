import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvOpticalsService {

  constructor(private httpClient: HttpClient) { }

  Rayban(countryName: string) {
    console.log(countryName);
    return this.httpClient.get(`http://universities.hipolabs.com/search?country=${countryName}`);
  }
}


// http://universities.hipolabs.com/search

// http://universities.hipolabs.com/search?country=United+Kingdom