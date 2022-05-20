
//anonymous function

   var temp= function (){
        console.log("Anonymous funct......");
    }

    // temp();

       var temp2= function (a:number,b:number):number{
            return (a+b);
        }

        var res=temp2(4,6);
        // console.log("value of res is "+res);


        // fat Arrow function/Arrow function

               var temp3= ()=>{
                    console.log("Fat arrow function is called");
                }

            // temp3();

     var temp4= (a:number,b:number):number=>{
          return (a+b);
      }

      var res1=temp4(8,8);

      console.log("res1 Value is "+res1);