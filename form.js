let email = document.getElementById("email");
let errormail = document.getElementById("errormail");
let phone = document.getElementById("phone");
let errorphone = document.getElementById("errorphone");
let Ucase = document.getElementById("Ucase");
let lcase = document.getElementById("lcase");
let pnumber = document.getElementById("pnumber")
let pchar = document.getElementById("pchar");
let passsword = document.getElementById("password");
let pconfirm = document.getElementById("pconfirm");


// Email validation

function mailvalidate(){
    let regmail =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (regmail.test(email.value)){
    errormail.innerHTML = "Valid email address"
    errormail.style.color = "green"
    return true
}
else{

    errormail.innerHTML = "Invalid email address"
    errormail.style.color = "red"
    // email.border.color = ("2px solid red")
    return false
}}


// Phone number validation

function phonevalidate(){
    let regphone1 = /^[0-9]{10}$/;
    let regphone2 = /^([0-9]{3})\-([0-9]{3})\-([0-9]{4})$/
    let regphone3 = /^([0-9]{3})\.([0-9]{3})\.([0-9]{4})$/

    if(regphone1.test(phone.value)|| regphone2.test(phone.value) || regphone3.test(phone.value)){
        errorphone.innerHTML = ("Valid mobile number")
        errorphone.style.color = "green"
        return true
    }
    else{
        errorphone.innerHTML = ("Invalid mobile number")
        errorphone.style.color = "red"
        return false
    }
}

//Password validation

// Uppercase validation

function passUpper(){
    let Upper = /[A-Z]/g;

    if (passsword.value.match(Upper)) {
        Ucase.innerHTML = ("Atleast 1 Uppercase letter satisfied")
        Ucase.style.color = "green"
        return true
    }
    else{
        Ucase.innerHTML = ("Atleast 1 Uppercase letter")
        Ucase.style.color = "red"
        return false
    }
};

 // lowercase validation

 function passlower(){
    let lower = /[a-z]/g;

    if (passsword.value.match(lower)) {
        lcase.innerHTML = ("Atleast 1 lowercase letter satisfied")
        lcase.style.color = "green"
        return true
    }
    else{
        lcase.innerHTML = ("Atleast 1 lowercase letter")
        lcase.style.color = "red"
        return false
    }
};

// Number validation

function passnum(){
    let num = /[0-9]/g;

    if (passsword.value.match(num)) {
        pnum.innerHTML = ("Atleast 1 Number satisfied")
        pnum.style.color = "green"
        return true
    }
    else{
        pnum.innerHTML = ("Atleast 1 Number")
        pnum.style.color = "red"
        return false
    }
};

// Character validation

function passchar(){
    let char = /[\!@#%$&*_-]/g;

    if (passsword.value.match(char)) {
        pchar.innerHTML = ("Atleast 1 Special character satisfied")
        pchar.style.color = "green"
        return true
    }
    else{
        pchar.innerHTML = ("Atleast 1 Special Character")
        pchar.style.color = "red"
        return false
    }
};

// strength validation

function passstrength(){
    if(passsword.value.length>=8){
        pstrength.innerHTML = ("Atleast 8 characters satisfied")
        pstrength.style.color = "green"
        return true;
    }
    else{
        pstrength.innerHTML = ("Atleast 8 characters")
        pstrength.style.color = "red"
        return false;
    }

};

   
// Whole password validation

function passvalidate(){
    

    if(passUpper()==false || passlower()==false || passnum()==false || passchar()==false || passstrength()==false){
        return false
    }
    else{
        return true
    }
};

// confirm password validation
function passconfirm(){
    if (passvalidate()==false){
        pconfirm.innerHTML= ("Check password field")
        pconfirm.style.color = "red"
        return false
    }
    else if (passsword.value==inputPassword4.value){
        pconfirm.innerHTML = ("Passwords matching");
        pconfirm.style.color = "green"
        return true
    }
    else{
        pconfirm.innerHTML = ("Passwords not matching");
        pconfirm.style.color = "red"
        return false
    }
    };

// Whole form validation
function validate(){

    if(mailvalidate()==false || phonevalidate()==false || passvalidate()==false || passconfirm()==false) {
        return false;
    }
    else{
        return true;
    }
};




// Login validate

function lvalidate(){

    if(mailvalidate()==false || passvalidate()==false) {
        return false;
    }
    else{
        return true;
    }
};
