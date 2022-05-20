import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    PostArr:any[]=[];
    id:string;
    title:string='';
    body:string='';
    ishidden:boolean=true;

  constructor(private service:MyhttpService) { }

  ngOnInit() {
   this.GetAllPost();

  }

  GetAllPost(){
    this.service.getPost()
    .subscribe((response)=>{
        console.log(response);
        this.PostArr=(<any> response)
    },(error)=>{
     // alert("Error is occured!!!");

     // alert('Status code is '+error.status);
      if(error.status>=300 && error.status<=399){
          //logic here msg
      }else if(error.status>=400 && error.status<=499){
        // Msg Logic
        alert("Page Not Found Client side "+error.status);
      }else if(error.status>=500 && error.status<=599){
        //msg logic
      }else{
        //msg logic
      }

    })
  }


  OnSend(mytitle,mybody){
    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response);
    })
  }

  onEdit(item){
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.ishidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);       
      this.id='';
      this.title='';
      this.body='';
      this.ishidden=true;

      
    })
  }

  OnDelete(id){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }

}
