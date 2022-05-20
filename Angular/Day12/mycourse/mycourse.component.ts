import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit {

    Course:string[]=[];

  constructor(private service:CourseService) { 
   // let service=new CourseService();
   // this.Course=service.getCourse()
  }

  ngOnInit() {
    this.Course=this.service.getCourse();
  }

}
