import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpClient: HttpClient) { }
  
    universityList(universityName: string) {
    console.log(universityName);
    return this.httpClient.get('http://universities.hipolabs.com/search?country=${universityName}');

  }
}
