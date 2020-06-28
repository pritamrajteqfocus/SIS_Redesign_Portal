function cancelForgotPassword()
        {
            document.getElementById('loginContainer').style.display = 'block';
            document.getElementById('forgotPasswordContainer').style.display = 'none';
            clearFormFields();
        }
        function forgotPassword()
        {
            document.getElementById('loginContainer').style.display = 'none';
            document.getElementById('forgotPasswordContainer').style.display = 'block';
        }
        function receivePassword()
        {
            var username = document.getElementById('retrievePassword').value;
            if(username != null && username != '' && username != undefined)
            {
                SIS_login.receivePassword(username,
                    function(result,event)
                    {
                        if(result == 'Success')
                        {
                            alert('We have sent your password to your email. Thanks.');
                            cancelForgotPassword();
                        }
                        else
                        {
                            alert(result);
                            clearFormFields();
                            return false;
                        }
                    }
                );
            }
            else
            {
                alert('Username cannot be blank.');
                return false;
            }
        }
        function signIn()
        {
			var oppMatchId = getId();
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            if(username == null || username == '' || username == undefined)
            {
                alert('Username cannot be blank.');
                return false;
            }
            else if(password == null || password == '' || password == undefined)
            {
                alert('Password cannot be blank.');
                return false;
            }
            else
            {
                SIS_login.login(username,password,oppMatchId,
                    function(result,event)
                    {
                        if(result.startsWith('Success'))
                        {
                            var coo = result.split('-')[1];
                            document.cookie = "apex__con="+coo;
							var onboarding=result.split('-')[2];
							var redirectToSummary = result.split('-')[3];
							var stuId = result.split('-')[4];
							var registrationOpen = result.split('-')[5];
							console.log('registrationOpen',registrationOpen);
							if(redirectToSummary == 'true' || redirectToSummary == true) {
								window.open("/current_internship?id="+stuId, target="_self");
							} else {
							if(onboarding == 'false' )
							{
								window.open("/SIS_Onboarding", target="_self");
							}
							else
							{
								if(registrationOpen == 'true')
								{
									console.log('in the academic');
									window.open("/SIS_Homepage?tab=academics&p=4", target="_self");
								}
								else if(registrationOpen == 'false')
								{
									console.log('not in the academic');
									window.open("/SIS_Homepage?tab=account", target="_self");
								}
								//window.open("/SIS_Homepage?tab=account", target="_self");
							}
							}
                        }
                        else
                        {
                            alert(result);
                            clearFormFields();
                            return false;
                        }
                    }
                );
            }
        }
        function clearFormFields()
        {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            document.getElementById('retrievePassword').value = '';
        }

function getCookie(cname)
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}




