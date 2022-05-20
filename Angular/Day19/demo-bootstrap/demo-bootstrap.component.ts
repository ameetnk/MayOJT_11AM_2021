import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {


  arrObj=[
    {
      name:"Motorola",
      price:45000,
      quantity:1
    },
    {
      name:"OnePlus",
      price:35000,
      quantity:1
    },
    {
      name:"Realme",
      price:27000,
      quantity:1
    },
    {
      name:"Nokia",
      price:12000,
      quantity:2
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
