import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent implements OnInit {

  mycolor:string='';

  constructor() { }

  ngOnInit() {
  }

  onClick(colorname:string){
      this.mycolor=colorname.trim().toLowerCase();
  }

//   onClick(colorname){
//     let temp:string=colorname.value;
//     this.mycolor=temp.trim().toLowerCase();
//     colorname.style.color='white';
// }

}
