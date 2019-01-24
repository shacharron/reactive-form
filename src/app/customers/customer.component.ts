import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormGroup } from '@angular/forms';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;

  customer = new Customer();

  constructor() { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true),
    });
  }
  populateTestDate(): void {
    this.customerForm.patchValue({
      firstName : "jack" ,
    })
  }

  save() {

  }
}
