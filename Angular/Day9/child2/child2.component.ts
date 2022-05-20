import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

    @Output() childStrEvent =new EventEmitter();
      strData:string="send Child Data...";
  
    @Output() childJsonEvent=new EventEmitter();

    childjson={
      name:"Motorolla",
      price:25000
    }
      constructor() { }

  ngOnInit() {
  }

  OnSend(){
    this.childStrEvent.emit(this.strData);
    this.childJsonEvent.emit(this.childjson)
  }

}
