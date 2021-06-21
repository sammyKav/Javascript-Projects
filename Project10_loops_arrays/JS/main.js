


function Call_Loop() {//while loop. when the length fo the Word string variable gets to 20 exit loop. 


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

var Instruments= ["Guitar","Drums","Piano","Flute","Bass","Violin","Trumpet","Flute"];//create array. 
var Content="";//create a blank variable to add a values to once the for loop is executed. 
var Y; //creates global variable t otbe used in the loop. 
function for_Loop() {//for loop will have iterations for each element in the array. 

    for(Y=0;Y<Instruments.length;Y++) {     

        Content += Instruments[Y]+"<br>";      
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function()    {//array

    var array_item=[];//adds an element to the array at each specified position. 
    array_item[0]="Red";
    array_item[1]="Blue";
    array_item[2]="Green";
    array_item[3]="Orange";
    document.getElementById("array").innerHTML="One color of the Rainbow is "+array_item[2];

}

function constant_function() {

    //creates and edits a constant
    const Frogs = {frog_type:"tree frog",poisonous:"Yes, deadly",color:"multi-bright"}; 
    Frogs.poisonous="only on Thursdays"
    document.getElementById("Constant").innerHTML=Frogs.poisonous+" "+Frogs.color;

}



let car = {//usiing a method
    make:"Dodge",
    model:"Viper",
    year:"2021",
    color:"red",


description: function(){//storing a functino as a property for an object. 

    return "The car is a "+this.year + " "+ this.color+" "+ this.make+" "+this.model;
    }
};

document.getElementById("Car_Object").innerHTML=car.description();


function BreakitUp(){//break  exit loop when n= 5. 
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

var zz=5;//let - allows you to change the value of a global variable inside brackets. 
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