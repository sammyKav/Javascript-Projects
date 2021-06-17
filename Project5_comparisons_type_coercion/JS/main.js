
function type_fun(){
 
    var int =  (typeof 15);

    document.getElementById("i").innerHTML=int;
}

function coer_fun() {

        var int1 = 10;
        var str = "42";
        var coercion = int1 + str;
        
        document.getElementById("c").innerHTML=coercion;
     
}

function NaN_fun() {

    var int2 = isNaN(-7);
    var str1 = isNaN("Blah!");

    document.getElementById("NaN").innerHTML=int2 + " "+str1 + " "+0/0;

}


function inf_fun() {


    document.getElementById("inf").innerHTML=3E310 + "   to  "  + -3E310;

}

function boo_fun(){

    t=5;
    z=10;
    document.getElementById("tz").innerHTML= (t>z) + " but " + (z>t);

}

console.log(2+2);
console.log(8<2);

function eql_fun() {

    document.getElementById("eq").innerHTML = (5==5)+" "+(6==5);

}

function trieq_fun(){

    document.getElementById("treq").innerHTML = "  "+(5===5)+ " " + (5==="6") +" "+ (5===6)+" "+ (5==="5");

}

function andor_fun(){

    A = (8>4 && 10>-7);
    B= (8>4 && 10>20);
    C=(8>4 || 10>20);
    D=(8<4 || 2<0);

    document.getElementById("ao").innerHTML=A+" "+B+" "+C+" "+D;

}

function not_fun(){

    E=!(8<2);
    F=!(8>2);
   
    document.getElementById("not").innerHTML = E+ " and "+F;

}