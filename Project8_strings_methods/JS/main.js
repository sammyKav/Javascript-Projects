function conc_fun(){ //concatenate function.

        var str1 ="Good";
        var str2 = " afternoon ";
        var str3 = ", everybody!";
        var together = str1.concat(str1,str2,str3);

        document.getElementById("conc").innerHTML=together;
}