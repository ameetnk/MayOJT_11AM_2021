import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

    myjson={
      id1:0,
      name1:'',
      status1:''
    }
  ngOnInit() {
    this.getDatafromUrl();
  }
  getDatafromUrl(){
      this.route.queryParamMap
      .subscribe((param)=>{
        this.myjson.id1=+param.get("id")
        this.myjson.name1=param.get("name");
        this.myjson.status1=param.get("status");
      })
  }

}
