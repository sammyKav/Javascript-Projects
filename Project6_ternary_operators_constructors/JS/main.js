

function Rider(Height, Age, Weight) {

    this.Rider_Height = Height;
    this.Rider_Age = Age;
    this.Rider_Weight = Weight;

}

var Bill = new Rider(60,34,150);

function Ride_Function() {
    


    document.getElementById("New_and_This").innerHTML= "Bill is " + Bill.Rider_Height + "cm tall. He's tall enough. "
}

function IQTest_Fun(){

    var flavor = document.getElementById("flavor").value;
    var Pass_Fail = (flavor=="vanilla")? (Math.random()*100+80):Math.random()*100;
    document.getElementById("IQ").innerHTML=Pass_Fail;

}


function Nested_Fun(){
    document.getElementById("nest").innerHTML=nest1();
    function nest1(){
        var H = "Happy ";
        function attch_fun(){H += "Birthday!" ;}
        attch_fun();
        return H;
    }

}