import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildpipe',
  templateUrl: './inbuildpipe.component.html',
  styleUrls: ['./inbuildpipe.component.css']
})
export class InbuildpipeComponent implements OnInit {

  strName:string='Your Angular trainer is Sumit raokhande';
  num2:number=55.678556;
  mydate=new Date();
  constructor() { }

  ngOnInit() {
  }

}
