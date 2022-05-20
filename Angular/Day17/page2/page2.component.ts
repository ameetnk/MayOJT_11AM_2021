import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  myid1:number=0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.getdatafromUrl();
  }

  getdatafromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
        console.log(param.get("id"));
        this.myid1=+param.get("id");
    })
  }

}
