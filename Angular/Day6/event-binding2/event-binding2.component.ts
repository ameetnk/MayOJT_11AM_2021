import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number;
  res:string='';
  res1:string='';
  Myname:string='';

  jsonObj={
    name:''
  }

  constructor() { }

  ngOnInit() {
  }

  onAddition(num1,num2)
  {
    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;
    console.log("Addition is "+this.result);
  }

  OnChange(change){
    console.log("Change Event Occur...");
    change.style.background='red';
  }
  OnKeyUp(){
    console.log("on Key Up Event Occur....")
  }

  OnKeydown(){
    console.log("On Key down event Occur!!!");
  }

}
