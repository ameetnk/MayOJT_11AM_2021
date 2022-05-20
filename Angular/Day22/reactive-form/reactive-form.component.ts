import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myFormGroup:FormGroup;


  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  course=[
    {
      id:1,
      name:'Angular'
    },
    {
      id:2,
      name:'React Js'
    },
    {
      id:3,
      name:'MEAN'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.GetAllControls();
  }

  GetAllControls(){
      this.myFormGroup=new FormGroup({
        username:new FormControl(null,Validators.required),
         email:new FormControl(null,
                   [Validators.required,Validators.email,
                   Validators.pattern(this.EMAIL_PATTERN)]),
          gender:new FormControl(null,Validators.required),
          
          course:new FormControl(null,Validators.required)

      })
  }


  onSubmit(){
    console.log(this.myFormGroup);
    console.log("Username ===== "+this.myFormGroup.value.username);   

  }


}
