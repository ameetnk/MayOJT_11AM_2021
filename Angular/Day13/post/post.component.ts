import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.service.getPost()
    .subscribe((response)=>{
        console.log(response);
    })
  }

}
