import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  mycolor:string='red';
  rating:number=21;

  myjson={
    color:"blue",
    fontFamily:'Trebuchet MS, Lucida Sans Unicode , Lucida Grande, Lucida Sans, Arial, sans-serif',
    "font-style":'italic'
  }

  constructor() { }

  ngOnInit() {
  }

}
