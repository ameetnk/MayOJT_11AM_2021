import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, totam veritatis ipsam id quia, rerum sunt mollitia quasi error modi unde placeat deleniti a repellendus quam minus sapiente nemo consectetur.';
  
  constructor() { }

  ngOnInit() {

  }
  

}
