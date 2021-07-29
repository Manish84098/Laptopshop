function subform() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var email = document.getElementById("e2").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;


    if (first == "" || last == "") {
        alert("first and last name required !");
    } else {
        if (validateEmail(email) != true) {
            alert("Enter valid email Id");
        } else {
            if (pass1 == "" || pass2 == "") {
                alert("password is empty!!")
            } else {
                if (pass1 != pass2) {
                    alert("password does not matched!")
                } else {
                    alert("saved");
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", pass1 || pass2);
                    window.location.href = "index_cust.html";
                }
            }
        }
    }




}

function subform_reg() {
    var com_id = document.getElementById("com_id").value;
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var email = document.getElementById("e2").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;


    if (com_id == "") {
        alert("company ID must required !")
    } else {
        if (first == "" || last == "") {
            alert("first and last name required !");
        } else {
            if (validateEmail(email) != true) {
                alert("Enter valid email Id");
            } else {
                if (pass1 == "" || pass2 == "") {
                    alert("password is empty!!")
                } else {
                    if (pass1 != pass2) {
                        alert("password does not matched!")
                    } else {
                        alert("saved");
                        localStorage.setItem("company_ID", com_id);
                        localStorage.setItem("C_email", email);
                        localStorage.setItem("C_password", pass1 || pass2);
                        window.location.href = "index_cust.html";
                    }
                }
            }
        }
    }
}

// signup html page -----
function myFunction() {
    var x = document.getElementById("pass1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function myFunction1() {
    var x = document.getElementById("pass2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function sub() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == localStorage.getItem("email")) {
        if (password == localStorage.getItem("password")) {
            alert("Login Successfully..")
            window.location.href = "home.html";
        }
    }
    else if (username == "" && password == "") {
        alert("fill password and Username");
    }
    else if (username != localStorage.getItem("email")) {
        if (password != localStorage.getItem("password")) {
            alert("password and email does not match")
            // window.location.href = "home.html";
        }
    }
}

function sub_reg() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var id = document.getElementById("company_id").value;

    // alert(username + password + id);

    if (id == localStorage.getItem("company_ID")) {
        if (username == localStorage.getItem("C_email")) {
            if (password == localStorage.getItem("C_password")) {
                alert("Login Successfullt..")
                window.location.href = "home.html";
            }
        }
    } else {
        alert("INVALID INPUT");
    }
    // alert("hhi")

}


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 