import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  allCountry:any[]=[];
  constructor(private service:HttpService,
            private route:Router) { }

  ngOnInit() {
    this.GetAllCountryFromBackend();
  }

  GetAllCountryFromBackend(){
    this.service.getAllCountry()
    .subscribe((response)=>{
      this.allCountry=(<any>response);
    })

  }

  onSubmit(f:NgForm){
    let obj={
      name:f.value.name,
      departmentit:f.value.departmentit,
      status:f.value.status,
      phoneno:f.value.phoneno,
      country:{
        cid:f.value.country.cid,
        cname:f.value.country.cname
      },
      createddtm:Date.now(),
      createdby:sessionStorage.getItem("username"),
      updateddtm:Date.now(),
      updatedby:sessionStorage.getItem("username")

    }

    this.service.addEmployee(obj)
    .subscribe((response)=>{
      console.log(response);
      this.route.navigate(["/home"]);
    })

  }

}
