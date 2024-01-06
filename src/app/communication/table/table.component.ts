import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  ngOnInit() {
    console.log('i am on init');
  }

  constructor() {
    console.log('i am const');
  }

  ngOnDestroy() {
    console.log('I am destroyed...');
  }

  

  


}
