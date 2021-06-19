function conc_fun(){ //concatenate function.

        var str1 ="Good";
        var str2 = " afternoon ";
        var str3 = ", everybody!";
        var together = str1.concat(str2,str3);

        document.getElementById("conc").innerHTML=together;
}

function slice_fun(){

    var sentence = "Good afternoon, how have things been north of the border?"
    var word = sentence.slice(5,14);
    document.getElementById("slice").innerHTML = word;
}

function upcase_fun(){ //upcase

    var word ="happy";
    upword =word.toUpperCase();
    document.getElementById("up").innerHTML=upword;

}

function search_fun(){ //search method. 

    var text = "Have you ever met the king of France?";
    var king = text.search("king");
    document.getElementById("search").innerHTML=king;

}

function numStr_fun(){ //number to a string

    var n = -400;
    var s = n.toString();
    document.getElementById("ts").innerHTML =(typeof s)+s;

}

function precision_fun(){ //specifying number places
    var X = Math.E;
    document.getElementById("precis").innerHTML = X.toPrecision(3);

}

function toFixed_fun(){ //to Fixed
    var M = Math.E;
    document.getElementById("tofixed").innerHTML = M.toFixed(4);

}

function valueOf_fun(){

    var S = "Not sure what this function is used for?";
    var V = S.valueOf();
    document.getElementById("vO").innerHTML = V;

}
