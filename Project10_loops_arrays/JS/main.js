


function Call_Loop() {//while loop.

    var X = 1;
    var Digit = "";
    var Word =" Blah"
    var strLen =Word.length;
    while(strLen<20) {
        Digit +="<br>"+X + Word + strLen;
        X++;
        Word+="h";
        strLen = Word.length;//str length.
    }
    document.getElementById("Loop").innerHTML=Digit;
}

var Instruments= ["Guitar","Drums","Piano","Flute","Bass","Violin","Trumpet","Flute"];
var Content="";
var Y;
function for_Loop() {

    for(Y=0;Y<Instruments.length;Y++) {

        Content += Instruments[Y]+"<br>";      
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function()    {

    var array_item=[];
    array_item[0]="Red";
    array_item[1]="Blue";
    array_item[2]="Green";
    array_item[3]="Orange";
    document.getElementById("array").innerHTML="One color of the Rainbow is "+array_item[2];

}

function constant_function() {

    
    const Frogs = {frog_type:"tree frog",poisonous:"Yes, deadly",color:"multi-bright"};
    Frogs.poisonous="only on Thursdays"
    document.getElementById("Constant").innerHTML=Frogs.poisonous+" "+Frogs.color;

}



let car = {
    make:"Dodge",
    model:"Viper",
    year:"2021",
    color:"red",


description: function(){

    return "The car is a "+this.year + " "+ this.color+" "+ this.make+" "+this.model;
    }
};

document.getElementById("Car_Object").innerHTML=car.description();


function BreakitUp(){
    var n= 0;
    var P=""
    var S=" Don't make me repeat myself! ";
    var K=" I don't like to repeat myself! ";
    var SK = S+K


    while(n<7){
        if(n==5){break;}
        
        P+= SK+" "+n;
        n++;

    

    }
    document.getElementById("break").innerHTML=P;
}

var zz=5;//let
document.getElementById("zz").innerHTML=zz;

function zz_fun(){
    let zz=2;
    return zz;
}
document.getElementById("zz_Fun").innerHTML=zz_fun();

function zz_fun1(){

    return zz;
}
document.getElementById("zz_Fun1").innerHTML=zz_fun1();