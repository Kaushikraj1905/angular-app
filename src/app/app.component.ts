import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';

  // variableName: dataType = value;
  studentId: number = 80;
  studentName: string = 'John';
  studentEmailId: string = 'john@gmail.com';
  studentStatus: boolean = false;
  studentIds: number[] = [1, 2, 3, 4, 50, 60, 80];
  studentNames: string[] = ['Tom', 'John', 'Maxi'];

  company: any = {
    companyName: 'sira',
    companyId: 59432,
    companysize: 50,
    companyEmail: 'sira@gmail.com',
    companyAvailability: true,
    coampanyLocation: ['India', 'USA']
  };

  customer: any = {
    customerName: 'kaushik',
    customerEmailId: 'kaushikraj@gmail.com',
    prime: true,
    secondary: false,
    products: [
      { pName: 'Xbox', pId: 'xbox145', address: { stNo: '123', state: 'TX', city: 'Irving', zipcode: '75062' } },
      { pName: 'Tv', pid: 'samsung456' },
      { pName: 'Alexa', pid: 'alx789' }],
  };

  employee: any = {
    name: 'somr thing here',
    email: ''
  };
}
