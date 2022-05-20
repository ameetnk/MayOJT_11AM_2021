import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emplyoee } from '../employee';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  id:number=0;

  empobj=<Emplyoee>{}; 


  constructor(private route:ActivatedRoute,
    private service:HttpService) { }

  ngOnInit() {
    this.GetDataRetriveFromURL();
    this.GetDataFromBackend(this.id);
  }

  GetDataRetriveFromURL(){
    this.route.paramMap
    .subscribe((param)=>{
      this.id=+param.get("id");
    });
  }

  GetDataFromBackend(id:number){
    this.service.getParticularRecord(id)
    .subscribe((response)=>{
      this.empobj=(<Emplyoee>response);
      console.log(this.empobj);
    })
  }



}
