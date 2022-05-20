import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {

  mydata:string='';

  constructor(private route:ActivatedRoute,
    private notifyquery:NotificationService) { }

    myjson={
      id1:0,
      name1:'',
      status1:''
    }
  ngOnInit() {
    this.getDatafromUrl();
    this.GetEmitatedData();
  }
  getDatafromUrl(){
      this.route.queryParamMap
      .subscribe((param)=>{
        this.myjson.id1=+param.get("id")
        this.myjson.name1=param.get("name");
        this.myjson.status1=param.get("status");
      })
  }

  GetEmitatedData(){
      this.notifyquery.notification
      .subscribe((data)=>{
        this.mydata=data;
      })
  }



  OnSend(msg){
    this.notifyquery.SendDataFromService(msg);
  }


}
