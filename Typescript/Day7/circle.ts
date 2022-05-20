import {Shape} from './shape';

export class Circle extends Shape
{
    radius:number;
    area:number;

    constructor(radius:number){
        super();
        this.radius=radius;
        this.area=0;
    }

    MyArea(){
        this.area=3.14*this.radius*this.radius;
    }

    display(){
        console.log(`
            =============Circle Area==============
            Radius  :: ${this.radius}
            Area    :: ${this.area}
        `)
    }

}