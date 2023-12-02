import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  getDataFromApi() {
    //we will be hitting api from here
    console.log('i came to my friend apt...');
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

}
// https://jsonplaceholder.typicode.com/posts - GET