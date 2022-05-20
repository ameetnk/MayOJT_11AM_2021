import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { Emplyoee } from './../employee';
import { DialogService } from '../shared/dialog.service';
import { ToastrService  } from 'ngx-toastr';
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
  nameSearch:string='';

  modalRef: BsModalRef; 
  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  }; 
 
  constructor(private service:HttpService,
              private router:Router,
              private modalservice:BsModalService,
              private dialogservice:DialogService,
              private toaster:ToastrService) { }

  ngOnInit() {
    this.GetAllEMP();
  }

  GetAllEMP(){
      this.service.getAllEmployee()
      .subscribe((response)=>{
        console.log(response);
        this.EmpData=(<any>response);
      },(error)=>{
          console.log("Error....."+error.status);
        if(error.status>=300 || error.status<=399){

        }else if(error.status>=400 || error.status<=499){
          
        }else if(error.status>=500 || error.status<=599){
          
        }else if(error.status<=0){
          console.log(error.status);
          this.toaster.error("Server Not Found");
        }
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

        //  delete code likho
          this.service.deleteEmployee(this.empobj.id)
          .subscribe((response)=>{
            console.log(response);
            this.GetAllEMP();
            this.toaster.success(response);
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

  onChangeStatus(){
    if(this.onRadioCheck()){
        this.toaster.warning("Status Change successfully..")
    }else{
      alert("Please Select the Employee to Change a status...");
    }
  }


}
