import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit{
onFormSubmit() {
throw new Error('Method not implemented.');
}
  universityName: any;

  universityForm: FormGroup;
  constructor() {
    console.log('constructor..');
  }
  ngOnInit() {
    console.log('ngOnInit..');
    console.log(this.universityForm);
    this.createForm();
    console.log(this.universityForm);
  }
  createForm() {
    this.universityForm = new FormGroup({
      universityName: new FormControl(''),
      universityId: new FormControl(''),
      universityCountry: new FormControl(''),
    });
  }

}
