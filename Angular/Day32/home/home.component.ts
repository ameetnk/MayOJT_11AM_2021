import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { Emplyoee } from './../employee';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];
  empobj=<Emplyoee>{};
  p:number=1;
  oncheked:boolean=false;

  modalRef: BsModalRef; 
  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  }; 
 
  constructor(private service:HttpService,
              private router:Router,
              private modalservice:BsModalService,
              private dialogservice:DialogService) { }

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
      this.empobj=item;

  }

  onRadioCheck():boolean{
    if(this.oncheked==true){
      return true;
    }else{
      return false;
    }

  }

  onEdit(popUp:TemplateRef<any>){
    if(this.onRadioCheck()){
      this.modalRef=this.modalservice.show(popUp,this.config);
    }else{
      alert("Please Select the Employee to Update...");
    }
  }

  onDelete(){
    if(this.onRadioCheck()){
      //write down code here
      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        if(res){
          console.log("res value "+res);
          //delete code likho
          this.service.deleteEmployee(this.empobj.id)
          .subscribe((response)=>{
            console.log(response);
            this.GetAllEMP();
          })

        }else
        {
          console.log("res value "+res);
        }
      })

    }else{
      alert("Please Select the Employee to Delete...");
    }
  }


}
