function mathfun(){ //subtraction

  var M =  5-2;
document.getElementById("Math").innerHTML="5-2=" + M;

}


function timesfun(){ //multiplication

    var times =  5*2;
    var dv = 10/5;
  document.getElementById("mult").innerHTML="5*2=" + times + " 10/5=" +dv;
  
  }

 function more_Math() {//expression

    var math = (1+2)*10/2-5;
    document.getElementById("P").innerHTML="not writing that all out =" + math;
  }

  function rmder() {

    var R = 194%19;
    
    document.getElementById("r").innerHTML="divide 194 by 6 remainder is " + R;

  }

  function neg() {

    var N = -1000;
    
    document.getElementById("n").innerHTML="the absolute value of -1000 is " + -N;

  }

  function inc() {//increment

    var L = 1000;
    L++;
    var S =1000;
    S--;

    document.getElementById("a").innerHTML="increment up " + L + " increment down " + S;

  }

  
  function euler(){ //math function
    var Ee = Math.E;
    document.getElementById("e").innerHTML= " Euler's # aka e is equal to the limit as n approaches infinity (1+1/n)^n =" + Ee;
  }

function randy() { //random # function.

    var ran =Math.random();
    
    document.getElementById("rando").innerHTML="the is a random #" + ran;
}