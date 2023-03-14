function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("card").value;
    let x1 = document.getElementById("phone").value;
    let x2 = document.getElementById("email").value;
    let x3 = document.getElementById("postal").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 16 || x > 16){
        text = "Input not valid";
    }
    else if(isNaN(x1) || x < 10 || x > 10){
        text = "Input not valid";
    }
    else if(x2 == "" ){
        text = "Input not valid";
    }
    else if(!isEmail(x2)){
        text = "Input not valid";
    }
    else if(isNaN(x3) || x < 5 || x > 6) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("card1").innerHTML = text;
    document.getElementById("phone1").innerHTML = text;
    document.getElementById("email1").innerHTML = text;  
    document.getElementById("postal1").innerHTML = text;
}

function isEmail(e){
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}