		function cancelForgotPassword()
        {
            document.getElementById('row1').style.display = 'none';
            document.getElementById('row2').style.display = 'none';
			document.getElementById('row3').style.display = 'block';
            clearFormFields();
        }
		function submitForgotPassword()
        {
            document.getElementById('row1').style.display = 'none';
            document.getElementById('row2').style.display = 'none';
			document.getElementById('row3').style.display = 'block';
            clearFormFields();
        }
        function forgotPassword()
        {
            document.getElementById('row1').style.display = 'none';
            document.getElementById('row2').style.display = 'block';
			document.getElementById('row3').style.display = 'none';
        }
		function signInNow()
        {
            document.getElementById('row1').style.display = 'block';
            document.getElementById('row2').style.display = 'none';
			document.getElementById('row3').style.display = 'none';
        }
		function clearFormFields()
        {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            document.getElementById('typepassword').value = ''; 
			document.getElementById('typepassword').value = '';
        }
		
        function receivePassword()
        {
            var username = document.getElementById('retrievePassword').value;
            if(username != null && username != '' && username != undefined)
            {
                PA_login.receivePassword(username,
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
                PA_login.login(username,password,
                    function(result,event)
                    {
                        if(result.startsWith('Success'))
                        {
                            var coo = result.split('-')[1];
                            document.cookie = "apex__con="+coo;
							var onboarding=result.split('-')[2];
							if(onboarding == 'false' )
							{
								
								window.open("/SIS_Onboarding", target="_self");
							}
							else
							{
								window.open("/pa/PA_Homepage", target="_self");
							}
                        }
                        else
                        {
                            alert(result);
                            //clearFormFields();
                            return false;
                        }
                    }
                );
            }
        }
        
		//-----------------------------//
		function updatePassword(){
			var username = document.getElementById('username').value;
			var typePassword = document.getElementById('typePassword').value;
            var retypePassword = document.getElementById('retypePassword').value;
			if(username == null || username == '' || username == undefined)
            {
                alert('Username cannot be blank.');
                return false;
            }
            else if(typePassword == null || typePassword == '' || typePassword == undefined)
            {
                alert('Password cannot be blank.');
                return false;
            }
            else if(retypePassword == null || retypePassword == '' || retypePassword == undefined)
            {
                alert('Password cannot be blank.');
                return false;
            }
			else if(retypePassword!=typePassword){
				alert('Password must be same.');
                return false;
			}
			else{
				 PA_login.resetPassword(username,typePassword,retypePassword,
                    function(result,event)
                    {
                        if(result == 'Success')
                        {
                            submitForgotPassword();
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
		