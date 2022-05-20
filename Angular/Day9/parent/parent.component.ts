import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='sending parent Data..';
  
  myjson={
    fname:"Sumit",
    id:9
  }

  arrObjData=[];

  childTOParentstrdata:string='';
  childToParentJSONData={};
  
  constructor() { }

  ngOnInit() {
  }

  onSend(){
    this.arrObjData=this.getarrobj()
  }

  getarrobj(){
    let arrObj=[
      {
        fname:"Sumit",
        id:9
      },
      {
        fname:"Kiran",
        id:6
      },
      {
        fname:"Spruha",
        id:3
      }
    ];

    return (arrObj)
  }

}
