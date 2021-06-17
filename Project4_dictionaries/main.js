function my_Dictionary() {

    var watch = { //object

        Brand:"Garmin", //attributes
        GPS:"Yes",
        Cost:600,
        Battery_Life:300,
        Activity:"multiple"
    };
    delete watch.Activity;//delets a kvp
    document.getElementById("Dictionary").innerHTML= watch.Activity;//will display undefined.
    document.getElementById("Brand").innerHTML= watch.Brand;//will show brand. 

}