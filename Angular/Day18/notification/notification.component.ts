import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  NotificationData:string='';
  constructor(private notify:NotificationService) { }

  ngOnInit() {
    this.GetDataFromService();
  }

  GetDataFromService(){
    this.notify.notification
    .subscribe((emitdata)=>{
      this.NotificationData=emitdata;
    })
  }

}
