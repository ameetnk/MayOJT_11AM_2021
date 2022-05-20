import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];
  p:number=1;
  oncheked:boolean=false;
 
  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit() {
    this.GetAllEMP();
  }

  GetAllEMP(){
      this.service.getAllEmployee()
      .subscribe((response)=>{
        console.log(response);
        this.EmpData=(<any>response);
      })
  }


  onAddEmp(){
      this.router.navigate(['/addemp']);
  }


  onRadioClick(item){
      console.log(item);
      this.oncheked=true;
  }

  onRadioCheck():boolean{
    if(this.oncheked==true){
      return true;
    }else{
      return false;
    }

  }

  onEdit(){
    if(this.onRadioCheck()){

    }else{
      alert("Please Select the Employee to Update...");
    }
  }


}
