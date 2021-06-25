function getReceipt() {
    //this initializes our string so it can get passed from 
    //function to function, growing line by line line into a full receipt
    var text1="<h3>You Order:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (i = 0; i < sizeArray.length;i++) {
        if(sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize==="Personal Pizza") {
        sizeTotal=6;
    } else if (selectedSize==="Medium Pizza"){
        sizeTotal=10;
    } else if (selectedSize==="Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize==="Extra Large Pizza"){
        sizeTotal = 16;
    } else if (selectedSize==="Psycho Large Pizza"){
        sizeTotal = 40;
    }
    //adds the cost for the size of the pizza. 
    runningTotal = sizeTotal;
    //prints size and cost and console
    console.log(selectedSize+" =$"+sizeTotal+".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};
//puts toppings in array, and creates a text version of the toppings to display on the order
function getTopping(runningTotal,text1) {
    var toppingTotal=0;
    var selectedTopping=[]
    var toppingArray = document.getElementsByClassName("topping");
    //loops through array and if the topping is checked it appends it to the selectedTopping array
    for (var j = 0; j < toppingArray.length; j++) {
        if(toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+ toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
            
        }
    }

    //checks to for count of toppings that are eligible for charge. 
    var toppingCount= selectedTopping.length;
    if (toppingCount > 1){
        toppingTotal= (toppingCount-1);
    } else  {
        toppingTotal = 0;
    }
    //adds the # of toppings to the total cost ( pizza size cost)
    runningTotal = (runningTotal + 2*toppingTotal);
    console.log("total selected topping items:"+toppingTotal+".00");
    console.log(toppingCount+"topping -1 free topping = "+"$"+toppingTotal+" .00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+" .00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal+" .00"+ "</strong></h3>";
//alert(toppingArray.length)
};

