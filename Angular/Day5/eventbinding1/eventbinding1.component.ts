import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  flag:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.flag){
      console.log("Click Event Occur!!!");
      this.flag=false;
    }
    
  }

  onImageClick(){
    console.log('On Image Click..')
  }
  onEvent(myevent){
    console.log(myevent);
    console.log("Data is "+myevent.target.value);
  }

  onInputClick(data){
    console.log(data);
    console.log("Data is "+data.value);
    let temp=data.value;
    data.style.background='red';
    data.style.color='white';
    data.value="Welcome "+temp;
  }

}
