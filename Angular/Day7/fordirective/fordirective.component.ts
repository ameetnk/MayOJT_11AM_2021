import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 8','React Js','Embber Js','Vue Js','JSP'];

  arrObj=[
      {
        name:"Motorolla",
        price:22000,
        qunatity:1
      },
      {
        name:"Samsung",
        price:25000,
        qunatity:1
      },
      {
        name:"OnePlus",
        price:32000,
        qunatity:1
      },
      {
        name:"Realme",
        price:27000,
        qunatity:1
      }
  ];
  selected:string='';
  constructor() { }

  ngOnInit() {
  }


  onMouserOver(item){
    console.log("Mouse Over Event Occur!!");
    this.selected=item.name;
  }

  onMouseOut(){
    this.selected='';
  }

}
