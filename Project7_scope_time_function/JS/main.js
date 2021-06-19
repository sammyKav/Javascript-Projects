

var X=15;//global

function Local_Fun(){//local variable function

        var z=5;
    document.getElementById("z").innerHTML =z;
}

function LocalBad_Fun(){//console log error

    var t=5;

    console.log(X+z);

}
LocalBad_Fun();



function time_Fun(){ // time function

    if(new Date().getHours()>11){
      Lunch_Status=  document.getElementById("snack").innerHTML = "time for a snack";
    }
   else{  Lunch_Status=  document.getElementById("snack").innerHTML ="Get back to Work!";}

}

function cond_Fun() { //if statement
    
    wage =document.getElementById("wage").value
    
    if(wage >7.25){

      Job_Status=  "Who do you think you are? The King of France! Get outta here!";
    }
    else{Job_Status= "You're hired!";}        
    document.getElementById("Job_Status").innerHTML=Job_Status;

}


function Time_function() { //time function from previous slide. 

  var Time = new Date().getHours();
  var Reply;
  if(Time < 12 == Time > 0) {
       Reply = "It is morning time!";
  }
  else if(Time>=12==Time<18){
      Reply = "It is afternoon.";
  }    
  else{
      Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML=Reply;
}

