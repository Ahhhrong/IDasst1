function myFunction() {
    // Get the value of the input field with id="numb"
    let a = document.getElementById("name").value;
    let b = document.getElementById("number").value;
    let c = document.getElementById("email").value;
    let d = document.getElementById("sms").value;

    // If x is Not a Number or less than one or greater than 10
    let text1;
    let text2;
    let text3;
    let text4;
    if (a.length==0) 
    {
        text1= "Please Enter Your Name";

    }
    else
    {
        text1 =" "
    }
    if (b.length!=8) 
    {
        text2= "Please Enter Valid Phone Number ";

    }
    else
    {
        text2 =" "
    } if (c.length==0) 
    {
        text3= "Please Enter Email";

    }
    else
    {
        text3 =" "
    } if (d.length==0) 
    {
        text4= "Please Enter Ur Message";

    }
    else
    {
        text4 =" "
    }
    document.getElementById("pname").innerHTML =text1;
    document.getElementById("pnumber").innerHTML =text2;
    document.getElementById("pemail").innerHTML =text3;
    document.getElementById("psms").innerHTML =text4;
    

}
