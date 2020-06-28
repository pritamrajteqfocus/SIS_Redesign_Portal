window.onload = function() {
    document.getElementById('row1').style.display = 'block';
    document.getElementById('row2').style.display = 'none';
};

function cancelForgotPassword() {
    document.getElementById('row1').style.display = 'none';
    document.getElementById('row2').style.display = 'none';
    document.getElementById('row3').style.display = 'block';
    clearFormFields();
}

function submitForgotPassword() {
    document.getElementById('row1').style.display = 'none';
    document.getElementById('row2').style.display = 'block';
    clearFormFields();
}

function forgotPassword() {
    document.getElementById('row1').style.display = 'none';
    document.getElementById('row2').style.display = 'block';
}

function signInNow() {
    window.close();
    window.open('/pa/PAP_Login');
}

function clearFormFields() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('typepassword').value = '';
    document.getElementById('typepassword').value = '';
}

function receivePassword() {
    var username = document.getElementById('retrievePassword').value;
    if (username != null && username != '' && username != undefined) {
        PA_login.receivePassword(username,
            function(result, event) {
                if (result == 'Success') {
                    alert('We have sent your password to your email. Thanks.');
                    cancelForgotPassword();
                } else {
                    alert(result);
                    clearFormFields();
                    return false;
                }
            }
        );
    } else {
        alert('Username cannot be blank.');
        return false;
    }
}

function signIn() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == null || username == '' || username == undefined) {
        alert('Username cannot be blank.');
        return false;
    } else if (password == null || password == '' || password == undefined) {
        alert('Password cannot be blank.');
        return false;
    } else {
        PA_login.login(username, password,
            function(result, event) {
                if (result.startsWith('Success')) {
                    var coo = result.split('-')[1];
                    document.cookie = "apex__con=" + coo;
                    var onboarding = result.split('-')[2];
                    if (onboarding == 'false') {
                        window.open("/SIS_Onboarding", target = "_self");
                    } else {
                        window.open("/pa/PA_Homepage", target = "_self");
                    }
                } else {
                    alert(result);
                    return false;
                }
            }
        );
    }
}

function updatePassword() {
    var Id = '{!$CurrentPage.parameters.Id}';
    var typePassword = document.getElementById('typePassword').value;
    var retypePassword = document.getElementById('retypePassword').value;
    var specialCharecter = /[!@$,<>#:?_*&;]/g;
    if (typePassword == null || typePassword == '' || typePassword == undefined) {
        error = "Password cannot be blank.";
        document.getElementById("errorid").innerHTML = error;
        return false;
    } else if (retypePassword == null || retypePassword == '' || retypePassword == undefined) {
        error = "Password cannot be blank.";
        document.getElementById("errorid").innerHTML = error;
        return false;
    } else if (retypePassword != typePassword) {
        error = "Passwords must match.";
        document.getElementById("errorid").innerHTML = error;
        return false;
    }
    if (typePassword.length < 8 && retypePassword.length < 8) {
        error = "Your password must be at least 8 characters.";
        document.getElementById("errorid").innerHTML = error;
        return false;
    }
    if (typePassword.search(/[0-9]/) < 0 && retypePassword.search(/[0-9]/) < 0) {
        error = "Your password must contain at least one digit.";
        document.getElementById("errorid").innerHTML = error;
        return false;
    }
    if (!typePassword.match(specialCharecter)) {
        error = "Your password must contain at least one special charecter.";
        document.getElementById("errorid").innerHTML = error;
        return false;
    } else {
        PA_login.resetPassword(Id, typePassword, retypePassword,
            function(result, event) {
                if (result == 'Password Update Success') {
                    submitForgotPassword();
                } else {
                    alert(result);
                    clearFormFields();
                    return false;
                }
            }
        );
    }
}