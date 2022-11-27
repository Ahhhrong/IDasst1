function myFunction() {
    // Get the value of the input field with id="numb"
    var a = document.getElementById("name").value;
    var b = document.getElementById("number").value;
    var c = document.getElementById("email").value;
    var d = document.getElementById("sms").value;

    // If x is Not a Number or less than one or greater than 10
    var text1 ="";
    var text2="";
    var text3="";
    var text4="";
    if (a.length==0) {
        text1= "Input not valid";

    }
    else
    {
        document.getElementById("pname").innerHTML =" ";
    }
    if (b.length==0) 
    {
        text2= "Input not valid";
    }
    if (c.length==0) 
    {
        text1= "Input not valid";
    }
    if (d.length==0) 
    {
        text1= "Input not valid";
    }
    document.getElementById("pname").innerHTML = text1;
    document.getElementById("pnumber").innerHTML = text1;
    document.getElementById("pemail").innerHTML = text1;
    document.getElementById("psms").innerHTML = text1;

}
