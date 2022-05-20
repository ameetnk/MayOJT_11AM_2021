import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {
  name:string='sumit Raokhande';
  num1:number=4;
   
  ImageUrl:string='../../assets/bg.jpeg';

  constructor() { }

  ngOnInit() {
  }

}
