function My_First_Function()    {  //naming function starting function
    var str= "This text is blue."; //declare var 
    var result=str.fontcolor("blue");//set var font blue and save it in new var.
    document.getElementById("Blue_Text").innerHTML=result; //gives id to the function output

}

function My_Second_Function() {

    var sentence ="Hello have seen any ";//declare var set value = to a string. 
    sentence += " lions, tiggers or bears." //concatenate the string with additional text using +=  to set new var value
    document.getElementById("Concatenate").innerHTML = sentence;//sets value of function gives it ID, so it can be called in html.

}


function myFunction() {
    var K = 5 * 4;
    document.getElementById("demo").innerHTML = K;


  }
  