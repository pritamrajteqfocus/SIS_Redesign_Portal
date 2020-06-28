function getStuInfo()
{
    var stuId = getCookie('apex__con');
    if(stuId != null && stuId != '' && stuId != undefined)
    {
        SIS_MyAccountTab.getStudentInfo(stuId,
            function(result, event)
            {
                if(typeof result == 'string' && result.startsWith('Error'))
                {
                    alert(result);
                }
                else
                {
                    var email = result.Email_2__c;
                    if(email != null && email != '' && email != undefined)
                    {
                    	document.getElementById('myInfoEmail').value = email;
                    }
                    var phone = result.Phone__c;
					var countryCode = result.Countrycode__c;
					if(phone != null && phone != '' && phone != undefined)
					{
						document.getElementById('myInfoPhone').value = phone;
					}
					else
					{
						document.getElementById('myInfoPhone').value = '';
					}
					if(countryCode != null && countryCode != '' && countryCode != undefined)
					{
						document.getElementById('myInfoPhoneCountryCode').value = countryCode;
					}
					else
					{
						document.getElementById('myInfoPhoneCountryCode').value = '';
					}
                    var street = result.MailingStreet__c;
                    var city = result.MailingCity__c;
                    var state = result.MailingState__c;
                    var postalCode = result.MailingPostalCode__c;
                    var country = result.MailingCountry__c;
					var district = result.District__c;
					var sector = result.Sector__c;
		            var cell = result.Cell__c;
                    if(street != null && street != '' && street != undefined)
                    {
                    	document.getElementById('myInfoStreet').value = street;
                    }
                    else
                    {
                    	document.getElementById('myInfoStreet').value = '';
                    }
                    if(city != null && city != '' && city != undefined)
                    {
                    	document.getElementById('myInfoCity').value = city;
                    }
                    else
                    {
                    	document.getElementById('myInfoCity').value = '';
                    }
                    if(state != null && state != '' && state != undefined)
                    {
                    	document.getElementById('myInfoState').value = state;
                    }
                    else
                    {
                    	document.getElementById('myInfoState').value = '';
                    }
                    if(postalCode != null && postalCode != '' && postalCode != undefined)
                    {
                    	document.getElementById('myInfoZipCode').value = postalCode;
                    }
                    else
                    {
                    	document.getElementById('myInfoZipCode').value = '';
                    }
                    if(country != null && country != '' && country != undefined)
                    {
                    	document.getElementById('myInfoCountry').value = country;
                    }
                    else
                    {
                    	document.getElementById('myInfoCountry').value = '';
                    }
		    if(district != null && district != '' && district != undefined)
                    {
                    	document.getElementById('myInfoDistrict').value = district;
                    }
                    else
                    {
                    	document.getElementById('myInfoDistrict').value = '';
                    }
		     if(sector != null && sector != '' && sector != undefined)
                    {
                    	document.getElementById('myInfoSector').value = sector;
                    }
                    else
                    {
                    	document.getElementById('myInfoSector').value = '';
                    }
		     if(cell != null && cell != '' && cell != undefined)
                    {
                    	document.getElementById('myInfoCell').value = cell;
                    }
                    else
                    {
                    	document.getElementById('myInfoCell').value = '';
                    }
                }
            }
        );
    }
    else
    {
        alert('Your session has been expired. Please login again.');
        window.location.href = '/SIS_login';
    }
}
function getStuOtherInfo()
{
    var stuId = getCookie('apex__con');
    if(stuId != null && stuId != '' && stuId != undefined)
    {
        SIS_MyAccountTab.getStudentInfo(stuId,
            function(result, event)
            {
                if(typeof result == 'string' && result.startsWith('Error'))
                {
                    alert(result);
                }
                else
                {
                    var BirthPlaceCity = result.Birthplace_city__c;
                    if(BirthPlaceCity != null && BirthPlaceCity != '' && BirthPlaceCity != undefined)
                    {
                    	document.getElementById('myInfoBirthPlaceCity').value = BirthPlaceCity;
                    }
		    else
		    {
			document.getElementById('myInfoBirthPlaceCity').value = '';
		    }
		    var BirthPlaceCountry = result.Birthplace_country__c;
		    if(BirthPlaceCountry != null && BirthPlaceCountry != '' && BirthPlaceCountry != undefined)
                    {
                    	document.getElementsByClassName('BirthPlaceCountry').value = BirthPlaceCountry;
                    }
		    else
		    {
			document.getElementsByClassName('BirthPlaceCountry').value = '';
		    }
		    var MaritalStatus = result.Marital_Status__c;
		    if(MaritalStatus != null && MaritalStatus != '' && MaritalStatus != undefined)
                    {
                    	
			document.getElementsByClassName('maritalStatus').value = MaritalStatus;
                    }
		    else
		    {
			document.getElementsByClassName('maritalStatus').value = '';
		    }
		}
	     }
	);
     }
     else 
     {
        alert('Your session has been expired. Please login again.');
        window.location.href = '/SIS_login';
     }     
}




function editForm()
{
	getStuInfo();

	createCookie('editInProgress',true,'');
	createCookie('dialogBoxId','leavingMyAccountMyInfoPage','');
	
	document.getElementById('AccountEditMode').style.display = 'block';
	document.getElementById('AccountViewMode').style.display = 'none';
}
function editOtherInfoForm()
{
	getStuOtherInfo();

	createCookie('editInProgress',true,'');
	createCookie('dialogBoxId','leavingMyAccountMyInfoPage','');
	
	document.getElementById('AccountEditMode1').style.display = 'block';
	document.getElementById('AccountViewMode1').style.display = 'none';
}




function cancelForm()
{
	hideLeavingDialogBox();
	
	document.getElementById('AccountEditMode').style.display = 'none';
	document.getElementById('confirmDialogBox').style.display = 'none';
	document.getElementById('AccountViewMode').style.display = 'block';
	var returnURL = getCookie('returnURL');
	eraseCookie('returnURL');
    if(returnURL != null && returnURL != '')
    {
    	window.location.href = returnURL;
    }
}
function cancelOtherForm()
{
	hideLeavingDialogBox();
	
	document.getElementById('AccountEditMode1').style.display = 'none';
	document.getElementById('confirmDialogBox').style.display = 'none';
	document.getElementById('AccountViewMode1').style.display = 'block';
	var returnURL = getCookie('returnURL');
	eraseCookie('returnURL');
	    if(returnURL != null && returnURL != '')
	    {
	    	window.location.href = returnURL;
	    }	


}
function saveMyInfo()
{	
	var emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var regex = /^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/;
	//var zipRegex = /^[0-9a-zA-Z -]+$/;

	//var zipRegex = /^([A-Za-z0-9-]){1,20}$/;
	var zipRegex = /^[a-z\d\-_\s]+$/i;
	//var phoneRegex = /[0-9]|\./;
	//var PhonePattern = /^\(\d{3}\)\s*\d{3}(?:-|\s*)\d{4}$/;
	var conCookie = getCookie('apex__con');
	if(conCookie != null && conCookie != '')
	{
		var email = getValueById('myInfoEmail');
		var phone = getValueById('myInfoPhone');
		var phoneCountryCode = getValueById('myInfoPhoneCountryCode');
		var street = getValueById('myInfoStreet');
		var city = getValueById('myInfoCity');
		var state = getValueById('myInfoState');
		var cell = getValueById('myInfoCell');
		var zipCode = getValueById('myInfoZipCode');
		var country = getValueById('myInfoCountry');
		var district = getValueById('myInfoDistrict');
		var sector =  getValueById('myInfoSector');

		
		
		if(phone == '' || phone == null || phone == undefined || phoneCountryCode == '' || phoneCountryCode == null || phoneCountryCode == undefined)
		{
			alert('Phone number and country code are required.');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		else if(phoneCountryCode <= 0)
		{
			alert('Invalid Country code.');
			document.getElementById('myInfoPhoneCountryCode').value = '';
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		
		else if(phone != null && phone != '' && phone != undefined && phone.length < 8)
		{
			alert('Phone Number cannot be less than 8 digits');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		else if(phone != null && phone != '' && phone != undefined && phone.length > 14)
		{
			alert('Phone Number cannot be greater than 14 digits');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		else if(phoneCountryCode != null && phoneCountryCode != '' && phoneCountryCode != undefined && phoneCountryCode.length > 3 )
		{
			alert('Phone Country Code cannot be greater than 3 digits.');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		if(email == null || email == '' || email == undefined || emailRegex.test(email) == false)
		{
			alert('Invalid format of Email');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		if(city == null || city == '' || city == undefined || regex.test(city.trim()) == false)
		{
			alert('Invalid City Name');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		if(state == null || state == '' || state == undefined || regex.test(state.trim()) == false)
		{
			alert('Invalid State Name');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		if(country == null || country == '' || country == undefined || regex.test(country.trim()) == false)
		{
			alert('Invalid Country Name');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		if((zipCode == null || zipCode == '' || zipCode == undefined ) || zipRegex.test(zipCode) == false)
		{
			alert('Invalid Zipcode.');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		document.getElementById('saveMyInfoButton').classList.toggle('btn-clicked');	
		SIS_MyAccountTab.saveMyInfo(conCookie, email, phoneCountryCode, phone, street, city, state, zipCode, country,district,sector,cell,
	        function(result, event)
	        {
	            hideLeavingDialogBox();
	            var returnURL = getCookie('returnURL');
	            if(returnURL != null && returnURL != '')
	            {
	            	window.location.href = returnURL;
	            	eraseCookie('returnURL');
	            }
	            else
	            {
	            	window.location.reload();
	            }
	        }
	    );
	}
	else
	{
		alert('Your session has been expired. Please login again.');
		window.location.href = '/SIS_Login';
	}
}
function saveMyOtherInfo()
{
	var regex = /^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/;
	var conCookie = getCookie('apex__con');
	if(conCookie != null && conCookie != '')
	{
		var BirthPlaceCity = getValueById('myInfoBirthPlaceCity');
		
		var BirthPlaceCountry = document.getElementsByClassName('BirthPlaceCountry');
		if(BirthPlaceCountry != '' && BirthPlaceCountry != null && BirthPlaceCountry != undefined)
		{
			BirthPlaceCountry = BirthPlaceCountry[0].value;
			
		}
		
		var MaritalStatus = document.getElementsByClassName('maritalStatus');
		if(MaritalStatus != '' && MaritalStatus != null && MaritalStatus != undefined)
		{
			MaritalStatus = MaritalStatus[0].value;
			
		}
		
		//var maritall = document.getElementById('page:formId1:myInfoMaritalStatus').value;
		console.log('mati',MaritalStatus);
		
		if(BirthPlaceCity == '' || BirthPlaceCity == null || BirthPlaceCity == undefined)
		{
			alert('BirthPlace City is required.');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		else if(regex.test(BirthPlaceCity.trim()) == false)
		{
			alert('BirthPlace City is Invalid.');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		else if(BirthPlaceCountry == null || BirthPlaceCountry == '' || BirthPlaceCountry == undefined)
		{
			alert('BirthPlace Country is required.');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;

		}
		else if(MaritalStatus == null || MaritalStatus == '' || MaritalStatus == undefined)
		{
			alert('Marital Status is required.');
			document.getElementById('confirmDialogBox').style.display = 'none';
			hideLeavingModal();
			return false;
		}
		document.getElementById('saveMyOtherInfoButton').classList.toggle('btn-clicked');
		SIS_MyAccountTab.saveMyOtherInfo(conCookie, BirthPlaceCity, BirthPlaceCountry, MaritalStatus,
	        function(result, event)
	        {
	            hideLeavingDialogBox();
	            var returnURL = getCookie('returnURL');
	            if(returnURL != null && returnURL != '')
	            {
	            	window.location.href = returnURL;
	            	eraseCookie('returnURL');
	            }
	            else
	            {
	            	window.location.reload();
	            }
	        }
	    );

	}
	else
	{
		alert('Your session has been expired. Please login again.');
		window.location.href = '/SIS_Login';
	}
}
function hideLeavingModal()
{
	var editCookie = getCookie('editInProgress');
		if(editCookie == 'true')
		{
			
			var dialog = getCookie('dialogBoxId');
			document.getElementById(dialog).style.display = 'none';
		}



}



function getValueById(elementId)
{
	if(elementId != null && elementId != '')
	{
		var value = document.getElementById(elementId).value;
		if(value != null && value != 'undefined' && value != undefined && value != '')
		{
			return value;
		}
		else
		{
			return '';
		}
	}
}

function hideLeavingDialogBox()
{
	var dialogBoxId = getCookie('dialogBoxId');
	if(dialogBoxId != null && dialogBoxId != '')
	{
		eraseCookie('editInProgress');
		eraseCookie('dialogBoxId');
		
		document.getElementById(dialogBoxId).style.display = 'none';
	}
}


function checkEditCookie(url)
{
	console.log('Leaving page', url);
	url += '&c='+(new Date()).getTime();
	var editCookie = getCookie('editInProgress');
	var dialogBoxId = getCookie('dialogBoxId');
	if(editCookie != null && editCookie == 'true' && dialogBoxId != null && dialogBoxId != '')
	{
		document.getElementById(dialogBoxId).style.display = 'block';
		createCookie('returnURL',url,'');
	}
	else
	{
		 var popupBx = getCookie('AnotherSISPage');
        console.log('popupBx'+popupBx);
        if(popupBx != null && popupBx != '' && popupBx != undefined)
        {
            document.getElementById('popupId').style.display = 'block';
            console.log('url'+url);
            createCookie('returnURL',url,'');
        }   
        else
        {
            window.location.href = url;
        }
	}	
}

function afterLeavingMyAccountMyInfo()
{
	window.location = getCookie('returnURL');
	eraseCookie('returnURL');
	window.location.reload();
}

function saveForm()
{
	document.getElementById('confirmDialogBox').style.display = 'block';
}

function uploadProfilePic()
{
	document.getElementById('profilePicUpload').click();
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

function bytesToSize(bytes) 
{
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function profilePicUploaded()
{
    var file = document.getElementById('profilePicUpload');
    var files = file.files;
    var stuId = getCookie('apex__con');
    var reader = new FileReader();
    reader.file = files[0];
	
	if(!files[0].type.startsWith('image'))
	{
		alert('Only Image types are allowed.');
		window.location.reload();
		return false;
	}
    if(files[0].size > 512000)
    {
		alert('Only 500KB file size is allowed. File size is too large. '+bytesToSize(files[0].size));
		window.location.reload();
		return false;
		
    }
	else
    {
		reader.onload = function(e)
	    {
			var att = new sforce.SObject("Attachment");
	        att.Name = 'ProfilePic';
	        att.ContentType = this.file.type;

	        var binary = "";
	        var bytes = new Uint8Array(e.target.result);
	        var length = bytes.byteLength;

	        for (var i = 0; i < length; i++)
	        {
	            binary += String.fromCharCode(bytes[i]);
	        }
	        att.Body = (new sforce.Base64Binary(binary)).toString();
	        SIS_MyAccountTab.fileUpload(att.Name, att.Body, att.ContentType, stuId, 'Profile Pic',
	            function(result, event)
	            {
	                document.getElementById('loading').style.display = 'none';
	                if(result != 'Success')
                    {
                    	//alert(result);
                	}
					//var profilePicSession = sessionStorage.setItem('profileKey', result);
					
	                window.location.reload();
	            }
	        );
	    };
	    reader.readAsArrayBuffer(files[0]);
    }
}

//------------SIS_OtherContactsComponent VF Component Functions -----------
function createNewOtherContact(recType)
{
	var domId = '';
	if(recType == 'Emergency Contact')
	{
		domId = '-EC';
	}
	else
	{
		domId = '-PG';
	}
	document.getElementById('inputFirstname'+domId).value = '';
	document.getElementById('inputSurname'+domId).value = '';
	document.getElementById('inputPhone'+domId).value = '';
	document.getElementById('inputAltPhone'+domId).value = '';
	document.getElementById('inputEmail'+domId).value = '';
	document.getElementById('inputStreetAddress'+domId).value = '';
	document.getElementById('inputCity'+domId).value = '';
	document.getElementById('inputState'+domId).value = '';
	document.getElementById('inputCountry'+domId).value = '';
	document.getElementById('inputZipCode'+domId).value = '';
	document.getElementById('inputRelation'+domId).value = '';

	document.getElementById('createButton'+domId).style.display = 'none';
	document.getElementById('ocTable'+domId).style.display = 'none';
	document.getElementById('createNewContact'+domId).style.display = 'block';
}

function saveOtherContact(recType)
{	
	var stuId = getCookie('apex__con');
	
	if(stuId != null && stuId != '')
	{
		var domId = '';
		if(recType == 'Emergency Contact')
		{
			domId = '-EC';
		}
		else
		{
			domId = '-PG';
		}
		
		document.getElementById('saveOtherContactButton'+domId).classList.toggle("btn-clicked");
		document.getElementById('confirmDialogBox'+domId).style.display = 'none';
		var editedContactId = getCookie('editedContactId'+domId);
		var name = document.getElementById('inputFirstname'+domId).value;
		var surname = document.getElementById('inputSurname'+domId).value;
		var phone = document.getElementById('inputPhone'+domId).value;
		var phoneCountryCode = document.getElementById('inputPhoneCountryCode'+domId).value;
		var altPhone = document.getElementById('inputAltPhone'+domId).value;
		var altPhoneCountryCode = document.getElementById('inputAltPhoneCountryCode'+domId).value;
		var relation = document.getElementById('inputRelation'+domId).value;

		var oc = {
			Name: name,
			Surname__c: surname,
		    Phone_Number__c: phoneCountryCode+phone,
		    Alternate_Phone_Number__c: altPhoneCountryCode+altPhone,
		    Email_Address__c: document.getElementById('inputEmail'+domId).value,
		    Street_Address__c: document.getElementById('inputStreetAddress'+domId).value,
		    City__c: document.getElementById('inputCity'+domId).value,
		    Province_or_State__c: document.getElementById('inputState'+domId).value,
		    Country__c: document.getElementById('inputCountry'+domId).value,
		    Zip_Code__c: document.getElementById('inputZipCode'+domId).value,
		    Relation_to_me__c: relation,
		    Student__c: stuId
		}
		if(editedContactId != null && editedContactId != '')
		{
			oc["Id"] = editedContactId;
			eraseCookie('editedContactId'+domId);
		}
    	SIS_OtherContactsComponent.saveOtherContact(oc, stuId, recType,
            function(result, event)
            {
                hideLeavingDialogBox();
                var returnURL = getCookie('returnURL');
                eraseCookie('returnURL');
                if(returnURL != null && returnURL != '')
                {
                	window.location.href = returnURL;
                }
                else
                {
                	window.location.reload();
                }
            }
        );
		
	}
	else
	{
		alert('Your session has been expired, please login again.');
	}
}
function hideleavingEmergency(domId)
{
	var editCookie = getCookie('editInProgress');
	var editedContactId = getCookie('editedContactId'+domId);
		if(editCookie == 'true' && editedContactId != null)
		{
			
			var dialog = getCookie('dialogBoxId');
			document.getElementById(dialog).style.display = 'none';
		}

}
function editOtherContact(recType, entryId)
{
	var domId = '';
	var formTitle = '';
	if(recType == 'Emergency Contact')
	{
		domId = '-EC';
		formTitle = 'Editing my emergency contact’s information';
	}
	else
	{
		domId = '-PG';
		formTitle = 'Editing a parent or guardian’s information';
	}

	createCookie('editInProgress',true,'');
	createCookie('dialogBoxId','leavingEmergencyParentPage'+domId,'');

	SIS_OtherContactsComponent.editOtherContact(entryId,recType,
        function(result, event)
        {
            if(typeof result === "string" || result instanceof String)
            {
            	alert(result);
            	window.location.reload();
            }
            else
            {
            	if(result.Name != null)
            	{
            		document.getElementById('inputFirstname'+domId).value = result.Name;
            	}
            	else
            	{
            		document.getElementById('inputFirstname'+domId).value = '';
            	}
            	if(result.Surname__c != null)
            	{
            		document.getElementById('inputSurname'+domId).value = result.Surname__c;
            	}
            	else
            	{
            		document.getElementById('inputSurname'+domId).value = '';
            	}
            	if(result.Phone_Number__c != null)
            	{
            		var phone = result.Phone_Number__c;
            		if(phone.length == 11)
            		{
            			document.getElementById('inputPhoneCountryCode'+domId).value = phone.substring(0,1);
            			document.getElementById('inputPhone'+domId).value = phone.substring(1,14);
            		}
            		else if(phone.length == 12)
            		{
            			document.getElementById('inputPhoneCountryCode'+domId).value = phone.substring(0,2);
            			document.getElementById('inputPhone'+domId).value = phone.substring(2,14);
            		}
            		else if(phone.length == 13)
            		{
            			document.getElementById('inputPhoneCountryCode'+domId).value = phone.substring(0,3);
            			document.getElementById('inputPhone'+domId).value = phone.substring(3,14);
            		}
            		else
            		{
            			document.getElementById('inputPhone'+domId).value = phone;
            		}
            	}
            	else
            	{
            		document.getElementById('inputPhone'+domId).value = '';
            		document.getElementById('inputPhoneCountryCode'+domId).value = '';
            	}
            	if(result.Alternate_Phone_Number__c != null)
            	{
            		var altPhone = result.Alternate_Phone_Number__c;
            		if(altPhone.length == 11)
            		{
            			document.getElementById('inputAltPhoneCountryCode'+domId).value = altPhone.substring(0,1);
            			document.getElementById('inputAltPhone'+domId).value = altPhone.substring(1,14);
            		}
            		else if(altPhone.length == 12)
            		{
            			document.getElementById('inputAltPhoneCountryCode'+domId).value = altPhone.substring(0,2);
            			document.getElementById('inputAltPhone'+domId).value = altPhone.substring(2,14);
            		}
            		else if(altPhone.length == 13)
            		{
            			document.getElementById('inputAltPhoneCountryCode'+domId).value = altPhone.substring(0,3);
            			document.getElementById('inputAltPhone'+domId).value = altPhone.substring(3,14);
            		}
            		else
            		{
            			document.getElementById('inputAltPhone'+domId).value = altPhone;
            		}
            	}
            	else
            	{
            		document.getElementById('inputAltPhone'+domId).value = '';
            		document.getElementById('inputAltPhoneCountryCode'+domId).value = '';
            	}
            	if(result.Email_Address__c != null)
            	{
            		document.getElementById('inputEmail'+domId).value = result.Email_Address__c;
            	}
            	else
            	{
            		document.getElementById('inputEmail'+domId).value = '';
            	}
            	if(result.Street_Address__c != null)
            	{
            		document.getElementById('inputStreetAddress'+domId).value = result.Street_Address__c;
            	}
            	else
            	{
            		document.getElementById('inputStreetAddress'+domId).value = '';
            	}
            	if(result.City__c != null)
            	{
            		document.getElementById('inputCity'+domId).value = result.City__c;
            	}
            	else
            	{
            		document.getElementById('inputCity'+domId).value = '';
            	}
            	if(result.Province_or_State__c != null)
            	{
            		document.getElementById('inputState'+domId).value = result.Province_or_State__c;
            	}
            	else
            	{
            		document.getElementById('inputState'+domId).value = '';
            	}
            	if(result.Country__c != null)
            	{
            		document.getElementById('inputCountry'+domId).value = result.Country__c;
            	}
            	else
            	{
            		document.getElementById('inputCountry'+domId).value = '';
            	}
            	if(result.Zip_Code__c != null)
            	{
            		document.getElementById('inputZipCode'+domId).value = result.Zip_Code__c;
            	}
            	else
            	{
            		document.getElementById('inputZipCode'+domId).value = '';
            	}
            	if(result.Relation_to_me__c != null)
            	{
            		document.getElementById('inputRelation'+domId).value = result.Relation_to_me__c;
            	}
            	else
            	{
            		document.getElementById('inputRelation'+domId).value = '';
            	}
            	document.getElementById('createButton'+domId).style.display = 'none';
				document.getElementById('ocTable'+domId).style.display = 'none';
				document.getElementById('createNewContact'+domId).style.display = 'block';
            	
            	createCookie('editedContactId'+domId, entryId, '');
            }
        }
    );
}

function createCookie(name,value,days) 
{
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function eraseCookie(name)
{
	createCookie(name,'',-1);
}

function deleteOtherContact(entryId)
{
	var conf = confirm('Are you sure?');
	if(conf)
	{
		SIS_OtherContactsComponent.deleteOtherContact(entryId,
            function(result, event)
            {
                if(result != 'Successfully deleted')
                {
                	alert(result);
            	}
                window.location.reload();
            }
        );
	}
}

function cancelOtherContact(recType, contactsCount)
{
	var domId = '';
	if(recType == 'Emergency Contact')
	{
		domId = '-EC';
	}
	else
	{
		domId = '-PG';
	}
	if(contactsCount < 2)
	{
		document.getElementById('createButton'+domId).style.display = 'block';
	}
	else
	{
		document.getElementById('createButton'+domId).style.display = 'none';
	}
	document.getElementById('ocTable'+domId).style.display = 'block';
	document.getElementById('createNewContact'+domId).style.display = 'none';
	document.getElementById('confirmDialogBox'+domId).style.display = 'none';

	hideLeavingDialogBox();
	var returnURL = getCookie('returnURL');
    if(returnURL != null && returnURL != '')
    {
    	window.location.href = returnURL;
    }
    eraseCookie('returnURL');
}

function showSaveDialog(recType)
{	
	
	var domId = '';
	if(recType == 'Emergency Contact')
	{
		domId = '-EC';
	}
	else
	{
		domId = '-PG';
	}
	var isError = false;
	var name = document.getElementById('inputFirstname'+domId).value;
	if(name == '' || name == null || name == undefined)
	{
		document.getElementById('inputFirstname'+domId).style.border = '2px solid #af272f';
		document.getElementById('firstName'+domId).style.display = 'block';
		
		isError = true;	
	}
	else
	{
		document.getElementById('inputFirstname'+domId).style.border = '1px solid #a8a8a8';
		document.getElementById('firstName'+domId).style.display = 'none';
	}

	var surname = document.getElementById('inputSurname'+domId).value;
	if(surname == '' || surname == null || surname == undefined)
	{
		document.getElementById('inputSurname'+domId).style.border = '2px solid #af272f';
		document.getElementById('surName'+domId).style.display = 'block';
		
		isError = true;
	}
	else
	{
		document.getElementById('inputSurname'+domId).style.border = '1px solid #a8a8a8';
		document.getElementById('surName'+domId).style.display = 'none';
	}
	var relation = document.getElementById('inputRelation'+domId).value;
	if(relation == '' || relation == null || relation == undefined)
	{
		document.getElementById('inputRelation'+domId).style.border = '2px solid #af272f';
		document.getElementById('relationToMe'+domId).style.display = 'block';
		isError = true;
	}
	else
	{
		document.getElementById('inputRelation'+domId).style.border = '1px solid #a8a8a8';
		document.getElementById('relationToMe'+domId).style.display = 'none';
	}
	var phone = document.getElementById('inputPhone'+domId).value;
	var phoneCountryCode = document.getElementById('inputPhoneCountryCode'+domId).value;
	if(phone == '' || phone == null || phone == undefined || phoneCountryCode == '' || phoneCountryCode == null || phoneCountryCode == undefined)
	{
		document.getElementById('inputPhone'+domId).style.border = '2px solid #af272f';
		document.getElementById('inputPhoneCountryCode'+domId).style.border = '2px solid #af272f';
		document.getElementById('phn'+domId).style.display = 'block';
		document.getElementById('phn3'+domId).style.display = 'none';
		document.getElementById('phn2'+domId).style.display = 'none';
		isError = true;
	}
	else if(phone != null && phone != '' && phone != undefined && phone.length > 10)
	{
		document.getElementById('inputPhone'+domId).style.border = '2px solid #af272f';
		document.getElementById('inputPhoneCountryCode'+domId).style.border = '2px solid #af272f';
		document.getElementById('phn2'+domId).style.display = 'block';
		document.getElementById('phn3'+domId).style.display = 'none';
		document.getElementById('phn'+domId).style.display = 'none';
		isError = true;
	}
	else if(phoneCountryCode != null && phoneCountryCode != '' && phoneCountryCode != undefined && phoneCountryCode.length > 3)
	{
		document.getElementById('inputPhone'+domId).style.border = '2px solid #af272f';
		document.getElementById('inputPhoneCountryCode'+domId).style.border = '2px solid #af272f';
		document.getElementById('phn3'+domId).style.display = 'block';
		document.getElementById('phn2'+domId).style.display = 'none';
		document.getElementById('phn'+domId).style.display = 'none';
		
		isError = true;
	}
	else
	{
		document.getElementById('inputPhone'+domId).style.border = '1px solid #a8a8a8';
		document.getElementById('inputPhoneCountryCode'+domId).style.border = '1px solid #a8a8a8';
		document.getElementById('phn3'+domId).style.display = 'none';
		document.getElementById('phn2'+domId).style.display = 'none';
		document.getElementById('phn'+domId).style.display = 'none';
	}

	var altPhone = document.getElementById('inputAltPhone'+domId).value;
	var altPhoneCountryCode = document.getElementById('inputAltPhoneCountryCode'+domId).value;
	if(altPhone != null && altPhone != '' && altPhone != undefined)
	{
		if(altPhone.length > 10)
		{
			document.getElementById('inputAltPhoneCountryCode'+domId).style.border = '2px solid #af272f';
			document.getElementById('inputAltPhone'+domId).style.border = '2px solid #af272f';
			document.getElementById('altPhn'+domId).style.display = 'block';
			document.getElementById('altPhn2'+domId).style.display = 'none';
			document.getElementById('altPhn3'+domId).style.display = 'none';
			document.getElementById('altPhn4'+domId).style.display = 'none';
			isError = true;
		}
		if(altPhoneCountryCode == '' || altPhoneCountryCode == null || altPhoneCountryCode == undefined)
		{
			document.getElementById('inputAltPhoneCountryCode'+domId).style.border = '2px solid #af272f';
			document.getElementById('inputAltPhone'+domId).style.border = '2px solid #af272f';
			document.getElementById('altPhn2'+domId).style.display = 'block';
			document.getElementById('altPhn'+domId).style.display = 'none';
			document.getElementById('altPhn3'+domId).style.display = 'none';
			document.getElementById('altPhn4'+domId).style.display = 'none';
			isError = true;
		}
		else if(altPhoneCountryCode.length > 3)
		{
			document.getElementById('inputAltPhoneCountryCode'+domId).style.border = '2px solid #af272f';
			document.getElementById('inputAltPhone'+domId).style.border = '2px solid #af272f';
			document.getElementById('altPhn3'+domId).style.display = 'block';
			document.getElementById('altPhn2'+domId).style.display = 'none';
			document.getElementById('altPhn'+domId).style.display = 'none';
			document.getElementById('altPhn4'+domId).style.display = 'none';
			isError = true;
		}
	}
	else if(altPhoneCountryCode != null && altPhoneCountryCode != '' && altPhoneCountryCode != undefined)
	{
		document.getElementById('inputAltPhoneCountryCode'+domId).style.border = '2px solid #af272f';
		document.getElementById('inputAltPhone'+domId).style.border = '2px solid #af272f';
		document.getElementById('altPhn4'+domId).style.display = 'block';
		document.getElementById('altPhn3'+domId).style.display = 'none';
		document.getElementById('altPhn2'+domId).style.display = 'none';
		document.getElementById('altPhn'+domId).style.display = 'none';
		isError = true;
	}
	else
	{
		document.getElementById('inputAltPhoneCountryCode'+domId).style.border = '1px solid #a8a8a8';
		document.getElementById('inputAltPhone'+domId).style.border = '1px solid #a8a8a8';
		document.getElementById('altPhn3'+domId).style.display = 'none';
		document.getElementById('altPhn4'+domId).style.display = 'none';
		document.getElementById('altPhn2'+domId).style.display = 'none';
		document.getElementById('altPhn'+domId).style.display = 'none';
	}
	//document.getElementById('confirmDialogBox'+domId).style.display = 'block';
	if(!isError)
	{
		saveOtherContact(recType);
	}
	else
	{
		hideleavingEmergency(domId);
	}
}
//------------SIS_OtherContactsComponent VF Component Functions -----------END-----------


//----START--------- SIS_MyAccountTab_TravelDocument VF Component Functions ---------------
function cancelPassportEdit()
{
    hideLeavingDialogBox();
    SIS_MyAccountTab.passportfile(getCookie('apex__con'),'Passport',
	function(result,event)
	{
		
                if(typeof result == 'string' && result.startsWith('file'))
                {
                    document.getElementById('viewUploadedPassportbutton').style.display = 'none';
    		    document.getElementById('editUploadedPassportbutton').style.display = 'none';
                }
                else
                {
			var fileLink = result.File_Link__c;
			if(fileLink != null && fileLink != '' && fileLink != undefined )
			{
			document.getElementById('viewUploadedPassportbutton').style.display = 'inline-flex';
    			document.getElementById('editUploadedPassportbutton').style.display = 'none';
			}
			
			
		}
	}


   );
    document.getElementById('outputPassportNumber').style.display = 'block';
    document.getElementById('outputPassportExpDate').style.display = 'block';
    document.getElementById('outputNationality').style.display = 'block';
    document.getElementById('passportEditIcon').style.display = 'block';
    document.getElementById('passportUploadButton').style.display = 'none';
	document.getElementById('beforeUploadFile').style.display = 'none';
    
   

    document.getElementById('inputPassportNumber').style.display = 'none';
    document.getElementById('inputPassportExpDate').style.display = 'none';
    document.getElementById('inputNationality').style.display = 'none';
    document.getElementById('passportEditView_Buttons').style.display = 'none';

    document.getElementById('passportNationalityMessage').style.display = 'none';
	document.getElementById('InvalidPassportNationalityMessage').style.display = 'none';
    document.getElementById('passportExpiryMessage').style.display = 'none';
    document.getElementById('passportNumberMessage').style.display = 'none';
	document.getElementById('InvalidpassportNumberMessage').style.display = 'none';
    
    document.getElementById('inputPassportNumber').style.border = '1px solid #a8a8a8';
    document.getElementById('inputPassportExpDate').style.border = '1px solid #a8a8a8';
    document.getElementById('inputNationality').style.border = '1px solid #a8a8a8';

    var returnURL = getCookie('returnURL');
	eraseCookie('returnURL');
	if(returnURL != null && returnURL != '')
    {
    	window.location.href = returnURL;
    }
	eraseCookie('editPassport');
	eraseCookie('editResidency');
}

function savePassportInfo()
{
	
	document.getElementById('loadingSaveImage').style.display = 'block';
    var passportNumber = document.getElementById('inputPassportNumber').value;
    var passportExpDate = document.getElementById('inputPassportExpDate').value;
    var nationality = document.getElementById('inputNationality').value;
    var file = document.getElementById('passportFile');
    var files = file.files;
    var reader = new FileReader();
    reader.file = files[0];
    hideLeavingDialogBox();
    var errMsg = false;
	var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
	var CountryRegex = /^[a-zA-Z]*$/g;
    if(passportNumber == null || passportNumber == '' || passportNumber == undefined )
    {
        errMsg = true;
		document.getElementById('InvalidpassportNumberMessage').style.display = 'none';
        document.getElementById('inputPassportNumber').style.border = '2px solid #af272f';
        document.getElementById('passportNumberMessage').style.display = 'block';
		document.getElementById('loadingSaveImage').style.display = 'none';
		return false;
    }
    else
    {
        document.getElementById('inputPassportNumber').style.border = '1px solid #a8a8a8';
        document.getElementById('passportNumberMessage').style.display = 'none';
    }
	if((passportNumber != null || passportNumber != '' || passportNumber != undefined) && regex.test(passportNumber) == true)
	{
		errMsg = true;
        document.getElementById('inputPassportNumber').style.border = '2px solid #af272f';
        document.getElementById('InvalidpassportNumberMessage').style.display = 'block';
		document.getElementById('loadingSaveImage').style.display = 'none';
		return false;
	}else
	{
		document.getElementById('inputPassportNumber').style.border = '1px solid #a8a8a8';
        document.getElementById('InvalidpassportNumberMessage').style.display = 'none';
	}
    if(passportExpDate == null || passportExpDate == '' || passportExpDate == undefined)
    {
        errMsg = true;
        document.getElementById('inputPassportExpDate').style.border = '2px solid #af272f';
        document.getElementById('passportExpiryMessage').style.display = 'block';
		document.getElementById('loadingSaveImage').style.display = 'none';
		return false;
    }
    else
    {
        document.getElementById('inputPassportExpDate').style.border = '1px solid #a8a8a8';
        document.getElementById('passportExpiryMessage').style.display = 'none';
    }
    if(nationality == null || nationality == '' || nationality == undefined)
    {
        errMsg = true;
        document.getElementById('inputNationality').style.border = '2px solid #af272f';
        document.getElementById('passportNationalityMessage').style.display = 'block';
		document.getElementById('InvalidPassportNationalityMessage').style.display = 'none';
		document.getElementById('loadingSaveImage').style.display = 'none';
		return false;
    }
    else
    {
        document.getElementById('inputNationality').style.border = '1px solid #a8a8a8';
        document.getElementById('passportNationalityMessage').style.display = 'none';
    }
	if((nationality != null || nationality != '' || nationality != undefined ) && CountryRegex.test(nationality) == false)
	{
		errMsg = true;
        document.getElementById('inputNationality').style.border = '2px solid #af272f';
        document.getElementById('InvalidPassportNationalityMessage').style.display = 'block';
		document.getElementById('loadingSaveImage').style.display = 'none';
		return false;
	}
	else
	{
		document.getElementById('inputNationality').style.border = '1px solid #a8a8a8';
        document.getElementById('InvalidPassportNationalityMessage').style.display = 'none';
	}
	
	    
	SIS_MyAccountTab_TravelDocument.getTravelDocumentLink(getCookie('apex__con'), 'Passport', 'Passport',
		function(result,event)
		{
			if(result == 'Failed')
			{
				if(files == null || files == undefined || files == '' || files[0] == null || files[0] == undefined || files[0] == '')
				{
    				errMsg = true;
    				alert('You have not uploaded the passport scanned copy.');
				}
				else if(!files[0].type.startsWith('image') && files[0].type != 'application/pdf')
			    {
			    	errMsg = true;
			    	alert('Only Image and PDF file types are allowed.');
					document.getElementById("beforeUploadFile").style.display = 'none';
					document.getElementById("passportUploadButton").style.display = 'block';
					document.getElementById("viewUploadedPassportbutton").style.display = 'none';
			    }
				else if(files[0].size > 3145728)
				{
					errMsg = true;
					alert('Select a file less than 3 Mb. File size is too large. ');
					document.getElementById("beforeUploadFile").style.display = 'none';
					document.getElementById("passportUploadButton").style.display = 'block';
					document.getElementById("viewUploadedPassportbutton").style.display = 'none';					
				}
			}else{
				//alert('You have already uploaded the file. ');
				document.getElementById('loadingSaveImage').style.display = 'block'; 
				document.getElementById('savePassportInfoButton').classList.toggle('btn-clicked');
		        SIS_MyAccountTab_TravelDocument.savePassportInformation(getCookie('apex__con'), passportNumber, passportExpDate, nationality,
		            function(result, event)
		            {
		                if(result != 'Success')
		                {
		            		alert(result);
		                }
		                var returnURL = getCookie('returnURL');
						
						if(returnURL != null && returnURL != '')
						{
							
							window.location.href = returnURL;
							eraseCookie('returnURL');
							
						}
						else
						{
							document.getElementById('loadingSaveImage').style.display = 'none';
							window.location.reload(); 
						}
		            }
		        );
					
			}
			
			
			if(!errMsg)
		    {
		        document.getElementById('savePassportInfoButton').classList.toggle('btn-clicked');
		        SIS_MyAccountTab_TravelDocument.savePassportInformation(getCookie('apex__con'), passportNumber, passportExpDate, nationality,
		            function(result, event)
		            {
		                var returnURL = getCookie('returnURL');
						console.log('returnURL',returnURL);
						if(returnURL != null && returnURL != '')
						{	
							window.location.href = returnURL;
							eraseCookie('returnURL');
							
							//window.location.reload();
						}
						else
						{	
							//alert('file uploaded successfully');
							
						}
		            }
		        );

		        document.getElementById('loading').style.display = 'block';
		        if(files != null && files != undefined && files != '' && 
		        	files[0] != null && files[0] != undefined && files[0] != '')
				{
					passport_ResidencyFileUploaded('Passport');
				}
		    }
		    else
		    {
				document.getElementById('loadingSaveImage').style.display = 'none';
		    	return false;
		    }
		}
	);
document.getElementById('loadingSaveImage').style.display = 'block';   
eraseCookie('editPassport');
eraseCookie('editResidency');						
}

function cancelResidencyPermitInfo()
{
    hideLeavingDialogBox();
    SIS_MyAccountTab.residencyfile(getCookie('apex__con'),'Residency Permit',
	function(result,event)
	{
		
                if(typeof result == 'string' && result.startsWith('file'))
                {
                    document.getElementById('viewUploadedResidencybutton').style.display = 'none';
    		    document.getElementById('editUploadedResidencybutton').style.display = 'none';
                }
                else
                {
			var fileLink = result.File_Link__c;
			if(fileLink != null && fileLink != '' && fileLink != undefined )
			{
			document.getElementById('viewUploadedResidencybutton').style.display = 'inline-flex';
    			document.getElementById('editUploadedResidencybutton').style.display = 'none';
			}
			
			
		}
	}


   );

    document.getElementById('outputResidencyPermitNumber').style.display = 'block';
    document.getElementById('outputResidencyExpDate').style.display = 'block';
    document.getElementById('residencyPermitEditIcon').style.display = 'block';
    document.getElementById('residencyUploadButton').style.display = 'none';
	document.getElementById('beforeUploadingFile').style.display = 'none';
    

    document.getElementById('inputResidencyPermitNumber').style.display = 'none';
    document.getElementById('inputResidencyExpDate').style.display = 'none';
    document.getElementById('residencyEditView_Buttons').style.display = 'none';

    document.getElementById('residencyExpiryMessage').style.display = 'none';
    document.getElementById('residencyPermitNumberMessage').style.display = 'none';
	document.getElementById('InvalidResidencyPermitNumberMessage').style.display = 'none';
    
    document.getElementById('inputResidencyPermitNumber').style.border = '1px solid #a8a8a8';
    document.getElementById('inputResidencyExpDate').style.border = '1px solid #a8a8a8';

    var returnURL = getCookie('returnURL');
	eraseCookie('returnURL');
	
    if(returnURL != null && returnURL != '')
    {
    	window.location.href = returnURL;
    }
	eraseCookie('editResidency');
	eraseCookie('editPassport');
}

function saveResidencyPermitInfo()
{
	document.getElementById('loadingSaveImage').style.display = 'block';
    var resPermitNumber = document.getElementById('inputResidencyPermitNumber').value;
    var resExpDate = document.getElementById('inputResidencyExpDate').value;
    var file = document.getElementById('residencyFile');
    var files = file.files;
    var reader = new FileReader();
    reader.file = files[0];
    hideLeavingDialogBox();
    var errMsg = false;
	var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    if(resPermitNumber == null || resPermitNumber == '' || resPermitNumber == undefined )
    {
        errMsg = true;
        document.getElementById('inputResidencyPermitNumber').style.border = '2px solid #af272f';
        document.getElementById('residencyPermitNumberMessage').style.display = 'block';
		document.getElementById('InvalidResidencyPermitNumberMessage').style.display = 'none';
		document.getElementById('loadingSaveImage').style.display = 'none';
		return false;
	}
    else
    {
		document.getElementById('inputResidencyPermitNumber').style.border = '1px solid #a8a8a8';
    	document.getElementById('residencyPermitNumberMessage').style.display = 'none';
	}
	if((resPermitNumber != null || resPermitNumber != '' || resPermitNumber != undefined) && regex.test(resPermitNumber) == true)
	{
		errMsg = true;
        document.getElementById('inputResidencyPermitNumber').style.border = '2px solid #af272f';
        document.getElementById('InvalidResidencyPermitNumberMessage').style.display = 'block';
		document.getElementById('loadingSaveImage').style.display = 'none';
		return false;
	}
	else
	{
		document.getElementById('inputResidencyPermitNumber').style.border = '1px solid #a8a8a8';
    	document.getElementById('InvalidResidencyPermitNumberMessage').style.display = 'none';
	}
    if(resExpDate == null || resExpDate == '' || resExpDate == undefined)
    {
        errMsg = true;
        document.getElementById('inputResidencyExpDate').style.border = '2px solid #af272f';
        document.getElementById('residencyExpiryMessage').style.display = 'block';
		document.getElementById('loadingSaveImage').style.display = 'none';
		return false;
    }
    else
    {
    	document.getElementById('inputResidencyExpDate').style.border = '1px solid #a8a8a8';
    	document.getElementById('residencyExpiryMessage').style.display = 'none';
	}
    SIS_MyAccountTab_TravelDocument.getTravelDocumentLink(getCookie('apex__con'), 'Residency Permit', 'ResidencyPermit',
		function(result,event)
		{
			if(result == 'Failed')
			{
				if(files == null || files == undefined || files == '' || files[0] == null || files[0] == undefined || files[0] == '')
				{
    				errMsg = true;
    				alert('You have not uploaded the residency permit scanned copy.');
				}
				else if(!files[0].type.startsWith('image') && files[0].type != 'application/pdf')
			    {
			    	errMsg = true;
			    	alert('Only Image and PDF file types are allowed.');
					document.getElementById("beforeUploadingFile").style.display = 'none';
					document.getElementById("residencyUploadButton").style.display = 'block';
					document.getElementById("viewUploadedResidencybutton").style.display = 'none';
			    }
				else if(files[0].size > 3145728)
				{
					errMsg = true;
					alert('Select a file less than 3 Mb. File size is too large. ');	
					
					document.getElementById("beforeUploadingFile").style.display = 'none';
					document.getElementById("residencyUploadButton").style.display = 'block';
					document.getElementById("viewUploadedResidencybutton").style.display = 'none';  					
				}
			}else{
				//alert('You have already uploaded the file.');
				document.getElementById('loadingSaveImage').style.display = 'block';
				document.getElementById('saveResidencyPermitInfoButton').classList.toggle('btn-clicked');
		        SIS_MyAccountTab_TravelDocument.saveResidencyInfo(getCookie('apex__con'), resPermitNumber, resExpDate,
		            function(result, event)
		            {
		                if(result != 'Success')
		                {
		            		alert(result);
		                }
		                var returnURL = getCookie('returnURL');
						
						if(returnURL != null && returnURL != '')
						{
							
							window.location.href = returnURL;
							eraseCookie('returnURL');
							
						}
						else
						{
							setTimeout(function()
							{ 
								document.getElementById('loadingSaveImage').style.display = 'none';
								window.location.reload(); 
							}, 1000);
							//window.location.reload();
							//setTimeout(location.reload.bind(location), 2000);
						}
		            }
		        );
				document.getElementById('loadingSaveImage').style.display = 'none';
				return false;
			}
			if(!errMsg)
		    {
		        document.getElementById('saveResidencyPermitInfoButton').classList.toggle('btn-clicked');
		        SIS_MyAccountTab_TravelDocument.saveResidencyInfo(getCookie('apex__con'), resPermitNumber, resExpDate,
		            function(result, event)
		            {
		                if(result != 'Success')
		                {
		            		alert(result);
		                }
		                var returnURL = getCookie('returnURL');
						
						if(returnURL != null && returnURL != '')
						{
							
							window.location.href = returnURL;
							eraseCookie('returnURL');
							
						}
						else
						{
							setTimeout(function()
							{ 
								document.getElementById('loadingSaveImage').style.display = 'none';
								window.location.reload(); 
							}, 10000);
							//window.location.reload();
							//setTimeout(location.reload.bind(location), 2000);
						}
		            }
		        );
		        document.getElementById('loading').style.display = 'block';
		        if(files != null && files != undefined && files != '' && 
		        	files[0] != null && files[0] != undefined && files[0] != '')
				{
					passport_ResidencyFileUploaded('Residency Permit');
				}
		    }
			else
			{
				
				document.getElementById('loadingSaveImage').style.display = 'none';
				return false;
			}
		}
	);
	document.getElementById('loadingSaveImage').style.display = 'block'; 
	eraseCookie('editResidency');
	eraseCookie('editPassport');
}

function passport_ResidencyFileUploaded(fileType)
{
    var file;
    var fileName;
    if(fileType == 'Passport')
    {
    	file = document.getElementById('passportFile');
    	fileName = 'Passport';
    }
    else if(fileType == 'Residency Permit')
    {
    	file = document.getElementById('residencyFile');
    	fileName = 'ResidencyPermit';
    }
    
    var files = file.files;
    var stuId = getCookie('apex__con');
    var reader = new FileReader();
    reader.file = files[0];
    
    if(!files[0].type.startsWith('image') && files[0].type != 'application/pdf')
    {
    	alert('Only Image and PDF file types are allowed.');
    }
    else
    {
    	reader.onload = function(e)
	    {
	        var att = new sforce.SObject("Attachment");
	        att.Name = fileName;
	        if(fileType == 'Passport')
	        {
	        	document.getElementById('passportUploadButton').style.display = 'none';
	        	document.getElementById('passportUploadInProgress').innerHTML = 'Uploading '+files[0].name+'...';
	        }
	        else if(fileType == 'Residency Permit')
		    {
		    	document.getElementById('residencyUploadButton').style.display = 'none';
	        	document.getElementById('residencyUploadInProgress').innerHTML = 'Uploading '+files[0].name+'...';
		    }
	        att.ContentType = this.file.type;

	        var binary = "";
	        var bytes = new Uint8Array(e.target.result);
	        var length = bytes.byteLength;

	        for (var i = 0; i < length; i++)
	        {
	            binary += String.fromCharCode(bytes[i]);
	        }
	        att.Body = (new sforce.Base64Binary(binary)).toString();
	        SIS_MyAccountTab_TravelDocument.passport_ResidencyFileUpload(att.Name, att.Body, att.ContentType, stuId, fileType,
	            function(result, event)
	            {
	                document.getElementById('loading').style.display = 'none';
	                /*alert(result);*/
	                if(fileType == 'Passport')
			        {
			        	document.getElementById('passportUploadInProgress').innerHTML = '';
			        }
			        else if(fileType == 'Residency Permit')
				    {
				    	document.getElementById('residencyUploadInProgress').innerHTML = '';
				    }
	                setTimeout(function()
					{ 
						document.getElementById('loadingSaveImage').style.display = 'none';
						window.location.reload(); 
				     }, 10000);
					
	                //window.location.reload();
	            }
	        );
	    };
	    reader.readAsArrayBuffer(files[0]);
    }
}
function removeFile(fileType)
{
    var conf = confirm('Click OK if you want to delete this file.');
    
    if(conf)
    {
        SIS_MyAccountTab_TravelDocument.removeUploadedFile(getCookie('apex__con'),fileType,
            function(result, event)
            {
                if(result != 'Successfully deleted.')
            	{
            		alert(result);
            	}
		
                 window.location.reload();
				
            }
		
            
        );
    }
}
//------------- SIS_MyAccountTab_TravelDocument VF Component Functions --------END-------

// ----------SIS_MyAccountTab_MedicalInfo VF Component Functions ----- START-----
//Medical Consent Form----------------------
function changeMedicalConsentFile()
{
    var file = document.getElementById('uploadedSignedMedicalConsent');
    var files = file.files;
    
    var reader = new FileReader();
    reader.file = files[0];
    if(!files[0].type.startsWith('image') && files[0].type != 'application/pdf')
    {
        alert('Only Image and PDF file types are allowed.');
    }
    else
    {
        var notUploadedFileDiv = document.getElementById('notUploadedFile');
        notUploadedFileDiv.innerHTML = '<a href="javascript:void(0);" style="color: #686868;">'+files[0].name+'</a><i id="removeFileIcon" class="fa fa-times-circle fa-2x" aria-hidden="true" style="margin-left: 20px;color: #686868;cursor:pointer;" onclick="cancelMedicalConsentEdit();"></i>';
        notUploadedFileDiv.style.display = 'inline-flex';
        document.getElementById("MedicalConsentEditView_Buttons").style.display = 'inline-flex';
        document.getElementById("uploadMedicalFormButton").style.display = 'none';
    }
}
function cancelMedicalConsentEdit()
{
    var notUploadedFileDiv = document.getElementById('notUploadedFile');
    notUploadedFileDiv.innerHTML = '';
    notUploadedFileDiv.style.display = 'none';
    document.getElementById("uploadMedicalFormButton").style.display = 'block';
    document.getElementById("MedicalConsentEditView_Buttons").style.display = 'none';
    var file = document.getElementById('uploadedSignedMedicalConsent');
    file.value = '';
}
function SIS_MedicalInfo(fileType)
{	

    var file;
    var fileName;
    if(fileType == 'Medical')
    {
        file = document.getElementById('uploadedSignedMedicalConsent');
        fileName = 'Medical Consent Form';
    }

    var files = file.files;
    var stuId = getCookie('apex__con');
    console.log(stuId);
    var reader = new FileReader();
    reader.file = files[0];

    reader.onload = function(e)
    {
        var att = new sforce.SObject("Attachment");
        att.Name = fileName;
        att.ContentType = this.file.type;

        document.getElementById('medicalConsentFormUploadInProgress').innerHTML = 'Uploading '+files[0].name+'...';

        var binary = "";
        var bytes = new Uint8Array(e.target.result);
        var length = bytes.byteLength;

        for (var i = 0; i < length; i++)
        {
            binary += String.fromCharCode(bytes[i]);
        }
        att.Body = (new sforce.Base64Binary(binary)).toString();
        SIS_MyAccountTab_MedicalInfo.MedicalInfoFileUpload(att.Name, att.Body, att.ContentType, stuId, fileType,
            function(result, event)
            {
                document.getElementById('loading').style.display = 'none';
                if(result != 'File uploaded successfully.')
            	{
            		alert(result);
            	}
                document.getElementById('medicalConsentFormUploadInProgress').innerHTML = '';
                window.location.reload();
            }
        );
    };
    reader.readAsArrayBuffer(files[0]);
}
/*function removeFile(fileType)
{
    var conf = confirm('Are you sure you want to delete the selected file.?');
    if(conf)
    {
        var stuId = getCookie('apex__con');
        console.log(stuId, fileType);
        SIS_MyAccountTab_MedicalInfo.removeUploadedFile(stuId,fileType,
            function(result, event)
            {
                if(result != 'Successfully deleted.')
            	{
            		alert(result);
            	}
                window.location.reload();
            }
        );
    }
}*/

//Insurance Module----------------------
function insuranceYesNoSelect(val)
{
    console.log(val);
    if(val == 'yes')
    {
        document.getElementById('insuranceNo').checked = false;
    }
    else if(val == 'no')
    {
        document.getElementById('insuranceYes').checked = false;
    }
}
function firstSubmitInsuranceChoice()
{
    var noVal = document.getElementById('insuranceNo').checked;
    var yesVal = document.getElementById('insuranceYes').checked;
    var stuId = getCookie('apex__con');
    var insuranceType = '';
    var errmsg = 'false';
    console.log(noVal, yesVal);
    if(noVal)
    {
        insuranceType = "Private Insurance";
    }
    else if(yesVal)
    {
        insuranceType = "ALU's Insurance";
    }
    else if(!noVal && !yesVal)
    {
        alert('Please select Yes or No and then click Submit.');
        return false;
    }
    //document.getElementById('insuranceFirstSubmitButton').style.display = 'none';
     document.getElementById('insuranceFirstSubmitButton').classList.toggle('btn-clicked');
    
    SIS_MyAccountTab_MedicalInfo.submitInsuranceChoice(stuId, insuranceType,
        function(result, event)
        {
            if(result != 'Success')
            {
                alert(result);
                window.location.reload();
            }
            else
            {	
                medicalExclamation(); 
                document.getElementById('loading').style.display = 'none';
                if(noVal)
                {	

                    console.log('IsBlank = ',isInsuranceTypeBlank);
                    document.getElementById('privateInsurancePage').style.display = 'block';
                    document.getElementById('insuranceFirstPage').style.display = 'none';
                    document.getElementById('aluInsurancePage').style.display = 'none';
                     document.getElementById('editUploadedInsurancebutton').style.display = 'none';
                    document.getElementById('insuranceSecondPageButtons').style.display = 'none';
                    document.getElementById('insuranceSecondSubmitButton').style.display = 'none';
                    document.getElementById('insuranceFirstSubmitButton').style.display = 'none';
                    document.getElementById('finalCancelButton').style.display = 'inline-flex';

		    document.getElementById('viewUploadedInsurancebutton').style.display = 'none';
		    document.getElementById('outputInsuranceProvider').innerHTML = '';
                    document.getElementById('outputPolicyHolderName').innerHTML = '';
                    document.getElementById('outputPolicyNumber').innerHTML = '';


                    document.getElementById('inputInsuranceProvider').value = '';
                    document.getElementById('inputPolicyHolderName').value = '';
                    document.getElementById('inputPolicyNumber').value = '';
                    document.getElementById('insuranceCoverLetter').value = '';

                    if(isInsuranceTypeBlank)
                    {
                        editPrivateInsurance();
                    }
                }
                else if(yesVal)
                {
                    document.getElementById('privateInsurancePage').style.display = 'none';
                    document.getElementById('insuranceFirstPage').style.display = 'none';
                    document.getElementById('aluInsurancePage').style.display = 'block';
                    document.getElementById('insuranceSecondPageButtons').style.display = 'none';
                    document.getElementById('insuranceSecondSubmitButton').style.display = 'none';
                    document.getElementById('insuranceFirstSubmitButton').style.display = 'none';
                    document.getElementById('finalCancelButton').style.display = 'inline-flex';
                }
            }
        }
    );
}
var isInsuranceTypeBlank = false;
        
function getInsuranceType()
{
    var stuId = getCookie('apex__con');
    SIS_MyAccountTab_MedicalInfo.getInsuranceType(stuId,
        function(result, event)
        {
            if(result != 'Private Insurance' && result != "ALU's Insurance" && result != "ALU&#39;s Insurance" && result != '')
            {
                alert(result);
                window.location.reload();
            }
            else if(result == 'Private Insurance')
            {
                document.getElementById('insuranceNo').checked = true;
                document.getElementById('insuranceYes').checked = false;
                document.getElementById('privateInsurancePage').style.display = 'block';
                document.getElementById('insuranceFirstPage').style.display = 'none';
                document.getElementById('aluInsurancePage').style.display = 'none';
                document.getElementById('insuranceSecondPageButtons').style.display = 'none';
                document.getElementById('finalCancelButton').style.display = 'inline-flex';
                document.getElementById('insuranceSecondSubmitButton').style.display = 'none';
                document.getElementById('insuranceFirstSubmitButton').style.display = 'none';
            }
            else if(result == "ALU's Insurance" || result == "ALU&#39;s Insurance")
            {
                document.getElementById('insuranceNo').checked = false;
                document.getElementById('insuranceYes').checked = true;
                document.getElementById('privateInsurancePage').style.display = 'none';
                document.getElementById('insuranceFirstPage').style.display = 'none';
                document.getElementById('aluInsurancePage').style.display = 'block';
                document.getElementById('finalCancelButton').style.display = 'inline-flex';
                document.getElementById('insuranceSecondPageButtons').style.display = 'none';
                document.getElementById('insuranceSecondSubmitButton').style.display = 'none';
                document.getElementById('insuranceFirstSubmitButton').style.display = 'none';
            }
            else if(result == '')
            {
                isInsuranceTypeBlank = true;
                document.getElementById('insuranceNo').checked = false;
                document.getElementById('insuranceYes').checked = false;
                document.getElementById('privateInsurancePage').style.display = 'none';
                document.getElementById('insuranceFirstPage').style.display = 'block';
                document.getElementById('aluInsurancePage').style.display = 'none';
                document.getElementById('insuranceSecondPageButtons').style.display = 'none';
                document.getElementById('insuranceFirstSubmitButton').style.display = 'block';
                document.getElementById('finalCancelButton').style.display = 'none';
            }
        }
    );
}
function finalCancelInsurance()
{
    var conf = confirm('Are you sure you want to cancel your insurance request?');
    if(conf)
    {
        var stuId = getCookie('apex__con');
        SIS_MyAccountTab_MedicalInfo.cancelInsuranceChoice(stuId,
            function(result, event)
            {
                if(result == 'Success')
                {
                    getInsuranceType();
                    //document.getElementById('privateInsurancePage').style.display = 'none';
                    //document.getElementById('insuranceSecondPageButtons').style.display = 'none';
		    document.getElementById("medicalExclamation").style.display = 'block';
                    //document.getElementById('finalCancelButton').style.display = 'none';
                    //document.getElementById('insuranceFirstPage').style.display = 'block';
                    //document.getElementById('aluInsurancePage').style.display = 'none';
		     document.getElementById('insuranceFirstSubmitButton').classList.remove('btn-clicked');
                    document.getElementById('inputInsuranceProvider').value = '';
                    document.getElementById('inputPolicyHolderName').value = '';
                    document.getElementById('inputPolicyNumber').value = '';
                    document.getElementById('insuranceCoverLetter').value = '';    
                }
                else
                {
                    alert(result);
                    window.location.reload();
                }
            }
        );
    }
    else
    {
        return false;    
    }
}
function cancelEditInsurance()
{
    hideLeavingDialogBox();
    var insProv = document.getElementById('inputInsuranceProvider').value;
    var policyHolder = document.getElementById('inputPolicyHolderName').value;
    var policyNumber = document.getElementById('inputPolicyNumber').value;
    if((insProv == null || insProv == '' || insProv == undefined) && (policyHolder == null || policyHolder == '' || policyHolder == undefined) 	   && (policyNumber == null || policyNumber == '' || policyNumber == undefined))
    {
	finalCancelInsurance();
    }
    else
    {
	 document.getElementById('privateInsuranceEditIcon').style.display = 'block';
    document.getElementById('outputInsuranceProvider').style.display = 'block';
    document.getElementById('outputPolicyHolderName').style.display = 'block';
    document.getElementById('outputPolicyNumber').style.display = 'block';
    document.getElementById('finalCancelButton').style.display = 'inline-flex';
    document.getElementById('uploadInsuranceLetterFile').style.display = 'none';
    document.getElementById('editUploadedInsurancebutton').style.display = 'none';
    document.getElementById('insuranceProviderMessage').style.display = 'none';
    document.getElementById('policyHolderNameMessage').style.display = 'none';

    document.getElementById('policyNumberMessage').style.display = 'none';

    document.getElementById('inputInsuranceProvider').style.display = 'none';
    document.getElementById('inputPolicyHolderName').style.display = 'none';
    document.getElementById('inputPolicyNumber').style.display = 'none';
    document.getElementById('insuranceSecondPageButtons').style.display = 'none';
    document.getElementById('insuranceSecondSubmitButton').style.display = 'none';
    	SIS_MyAccountTab.insurancefile(getCookie('apex__con'),'Insurance',
	function(result,event)
	{
		
                if(typeof result == 'string' && result.startsWith('file'))
                {
                    document.getElementById('viewUploadedInsurancebutton').style.display = 'none';
    		    document.getElementById('editUploadedInsurancebutton').style.display = 'none';
 		    document.getElementById('notUploadedInsuranceLetterFile').style.display = 'none';

                }
                else
                {
			var fileLink = result.File_Link__c;
			if(fileLink != null && fileLink != '' && fileLink != undefined )
			{
			document.getElementById('viewUploadedInsurancebutton').style.display = 'inline-flex';
    			document.getElementById('editUploadedInsurancebutton').style.display = 'none';
			document.getElementById('notUploadedInsuranceLetterFile').style.display = 'none';
			}
			
			
		}
	}


   );

    document.getElementById('extraLineBreaks').innerHTML = '<br/><br/><br/><br/><br/><br/><br/><br/>';

    var returnURL = getCookie('returnURL');
	eraseCookie('returnURL');
    if(returnURL != null && returnURL != '')
    {
    	window.location.href = returnURL;
    }
    }
      
}
function showSelectedInsuranceLetterFile()
{
	var files = document.getElementById('insuranceCoverLetter').files;
	document.getElementById('uploadInsuranceLetterFile').style.display = 'none';
	var notUploadedInsuranceDiv = document.getElementById('notUploadedInsuranceLetterFile');
	notUploadedInsuranceDiv.innerHTML = '<a href="javascript:void(0);" style="color: #686868;">'+files[0].name+'</a><i id="removeFileIcon" class="fa fa-times-circle fa-2x" aria-hidden="true" style="margin-left: 20px;color: #686868;cursor:pointer;" onclick="cancelInsuranceLetterUpload();"></i>';
    notUploadedInsuranceDiv.style.display = 'inline-flex';
    document.getElementById('finalCancelButton').style.display = 'none';
    document.getElementById('insuranceSecondPageButtons').style.display = 'inline-flex';
    document.getElementById('insuranceSecondSubmitButton').style.display = 'block';
}

function cancelInsuranceLetterUpload()
{
    document.getElementById('uploadInsuranceLetterFile').style.display = 'block';
    var notUploadedInsuranceDiv = document.getElementById('notUploadedInsuranceLetterFile');
	notUploadedInsuranceDiv.innerHTML = '';
	document.getElementById('insuranceCoverLetter').value = '';
    document.getElementById('notUploadedInsuranceLetterFile').style.display = 'none';
}

//------------- MEDICAL ENTRY SECTION --------------------------
function createNewMedicalEntry()
{
    document.getElementById('medicalEntryViewTable').style.display = 'none';
    
    document.getElementById('createNewMedicalEntryButton').style.display = 'none';
    document.getElementById('medicalEntryCreatePanel').style.display = 'block';
    document.getElementById('createMedicalEntryFirst').style.display = 'block';
    document.getElementById('AllergyCreatePanel').style.display = 'none';
    document.getElementById('SurgeryCreatePanel').style.display = 'none';
    document.getElementById('ConditionCreatePanel').style.display = 'none';

    document.getElementById('allergyDeleteTable').style.display = 'none';
    document.getElementById('surgeryDeleteTable').style.display = 'none';
    document.getElementById('conditionDeleteTable').style.display = 'none';
    document.getElementById('medicalEntryDeletePanel').style.display = 'none';
}

var selectedMedicalEntryType = '';
function selectMedicalEntryType(val)
{
    selectedMedicalEntryType = val;
    if(val == 'Allergy')
    {
        document.getElementById('medicalEntrySurgeryRadio').checked = false;
        document.getElementById('medicalEntryConditionRadio').checked = false;
    }
    else if(val == 'Surgery')
    {
        document.getElementById('medicalEntryAllergyRadio').checked = false;
        document.getElementById('medicalEntryConditionRadio').checked = false;
    }
    else if(val == 'Condition')
    {
        document.getElementById('medicalEntryAllergyRadio').checked = false;
        document.getElementById('medicalEntrySurgeryRadio').checked = false;
    }
}

function firstSubmitMedicalEntry()
{
    if(selectedMedicalEntryType != '')
    {
        if(selectedMedicalEntryType == 'Allergy')
        {
            document.getElementById('AllergyCreatePanel').style.display = 'block';
            document.getElementById('SurgeryCreatePanel').style.display = 'none';
            document.getElementById('ConditionCreatePanel').style.display = 'none';
        }
        else if(selectedMedicalEntryType == 'Surgery')
        {
            document.getElementById('AllergyCreatePanel').style.display = 'none';
            document.getElementById('SurgeryCreatePanel').style.display = 'block';
            document.getElementById('ConditionCreatePanel').style.display = 'none';
        }
        else if(selectedMedicalEntryType == 'Condition')
        {
            document.getElementById('AllergyCreatePanel').style.display = 'none';
            document.getElementById('SurgeryCreatePanel').style.display = 'none';
            document.getElementById('ConditionCreatePanel').style.display = 'block';
        }
        document.getElementById('medicalEntryViewTable').style.display = 'none';
        document.getElementById('createNewMedicalEntryButton').style.display = 'none';
        document.getElementById('createMedicalEntryFirst').style.display = 'none';

        //createCookie('editInProgress',true,'');
		//createCookie('dialogBoxId','leavingCreateMedicalEntry','');
    }
    else
    {
        alert('Please select an option before clicking Submit button.');
        return false;
    }
}

function firstCancelMedicalEntry()
{
    document.getElementById('medicalEntryViewTable').style.display = 'block';
    document.getElementById('createNewMedicalEntryButton').style.display = 'block';
    document.getElementById('medicalEntryCreatePanel').style.display = 'none';
    document.getElementById('medicalEntryAllergyRadio').checked = false;
    document.getElementById('medicalEntrySurgeryRadio').checked = false;
    document.getElementById('medicalEntryConditionRadio').checked = false;

    document.getElementById('allergyDeleteTable').style.display = 'none';
    document.getElementById('surgeryDeleteTable').style.display = 'none';
    document.getElementById('conditionDeleteTable').style.display = 'none';
    document.getElementById('medicalEntryDeletePanel').style.display = 'none';
    selectedMedicalEntryType = '';

    document.getElementById('uploadedAllergyNote').value = '';
    document.getElementById('uploadedConditionNote').value = '';

	document.getElementById('allergyMessage').style.display = 'none';
    document.getElementById('surgeryMessage').style.display = 'none';
    document.getElementById('surgeryDateMessage').style.display = 'none';
    document.getElementById('conditionMessage').style.display = 'none';

    document.getElementById('inputAllergy').style.border = '1px solid #a8a8a8';
    document.getElementById('inputSurgery').style.border = '1px solid #a8a8a8';
    document.getElementById('inputSurgeryDate').style.border = '1px solid #a8a8a8';
    document.getElementById('inputCondition').style.border = '1px solid #a8a8a8';
}

function changeMedicalNote(val)
{
    if(val == 'Allergy')
    {
        var files = document.getElementById('uploadedAllergyNote').files;
    	document.getElementById('uploadAllergyNoteButton').style.display = 'none';
    	var notUploadedAllergyDiv = document.getElementById('uploadedAllergyNoteDiv');
    	notUploadedAllergyDiv.innerHTML = '<a href="javascript:void(0);" style="color: #686868;">'+files[0].name+'</a><i class="fa fa-times-circle fa-2x" aria-hidden="true" style="margin-left: 20px;color: #686868;cursor:pointer;" onclick="cancelMedicalNoteUpload(\'Allergy\');"></i>';
        notUploadedAllergyDiv.style.display = 'inline-flex';
    }
    else if(val == 'Condition')
    {
        var files = document.getElementById('uploadedConditionNote').files;
    	document.getElementById('uploadConditionNoteButton').style.display = 'none';
    	var notUploadedConditionDiv = document.getElementById('uploadedConditionNoteDiv');
    	notUploadedConditionDiv.innerHTML = '<a href="javascript:void(0);" style="color: #686868;">'+files[0].name+'</a><i class="fa fa-times-circle fa-2x" aria-hidden="true" style="margin-left: 20px;color: #686868;cursor:pointer;" onclick="cancelMedicalNoteUpload(\'Condition\');"></i>';
        notUploadedConditionDiv.style.display = 'inline-flex';
    }
}

function cancelMedicalNoteUpload(val)
{
    if(val == 'Allergy')
    {
        document.getElementById('uploadedAllergyNote').value = '';
    	document.getElementById('uploadAllergyNoteButton').style.display = 'block';
    	var notUploadedAllergyDiv = document.getElementById('uploadedAllergyNoteDiv');
    	notUploadedAllergyDiv.style.display = 'none';
    	notUploadedAllergyDiv.innerHTML = '';
    }
    else if(val == 'Condition')
    {
        document.getElementById('uploadedConditionNote').value = '';
    	document.getElementById('uploadConditionNoteButton').style.display = 'block';
    	var notUploadedConditionDiv = document.getElementById('uploadedConditionNoteDiv');
    	notUploadedConditionDiv.style.display = 'none';
    	notUploadedConditionDiv.innerHTML = '';
    }
}

function saveMedicalEntry(val,obj)
{
    var files;
    var errMsg = false;
    var fileName = '';
    var allergenSurgeryCondition = '';
    var surgDate = '';
    var stuId = getCookie('apex__con');
    var fileType = '';

    if(val == 'Allergy')
    {
        files = document.getElementById('uploadedAllergyNote').files;
        var allergen = document.getElementById('inputAllergy').value;
        if(allergen == null || allergen == undefined || allergen == '')
        {
            errMsg = true;
            document.getElementById('inputAllergy').style.border = '2px solid #af272f';
            document.getElementById('allergyMessage').style.display = 'block';
        }
        else
        {
            allergenSurgeryCondition = allergen;
            document.getElementById('inputAllergy').style.border = '1px solid #a8a8a8';
            document.getElementById('allergyMessage').style.display = 'none';
        }
		fileType = 'AllergyDoctorNote';
    }
    else if(val == 'Condition')
    {
        files = document.getElementById('uploadedConditionNote').files;
        var cond = document.getElementById('inputCondition').value;
        if(cond == null || cond == undefined || cond == '')
        {
            errMsg = true;
            document.getElementById('inputCondition').style.border = '2px solid #af272f';
            document.getElementById('conditionMessage').style.display = 'block';
        }
        else
        {
            allergenSurgeryCondition = cond;
            document.getElementById('inputCondition').style.border = '1px solid #a8a8a8';
            document.getElementById('conditionMessage').style.display = 'none';
        }
		fileType = 'ConditionDoctorNote';
    }
    else if(val == 'Surgery')
    {
        var surg = document.getElementById('inputSurgery').value;
        if(surg == null || surg == undefined || surg == '')
        {
            errMsg = true;
            document.getElementById('inputSurgery').style.border = '2px solid #af272f';
            document.getElementById('surgeryMessage').style.display = 'block';
        }
        else
        {
            allergenSurgeryCondition = surg;
            document.getElementById('inputSurgery').style.border = '1px solid #a8a8a8';
            document.getElementById('surgeryMessage').style.display = 'none';
        }
        surgDate = document.getElementById('inputSurgeryDate').value;
        if(surgDate == null || surgDate == undefined || surgDate == '')
        {
            errMsg = true;
            document.getElementById('inputSurgeryDate').style.border = '2px solid #af272f';
            document.getElementById('surgeryDateMessage').style.display = 'block';
        }
        else
        {
            document.getElementById('inputSurgeryDate').style.border = '1px solid #a8a8a8';
            document.getElementById('surgeryDateMessage').style.display = 'none';
        }
    }
	var reader = new FileReader(); 
    if(files != null && files != undefined && files[0] != null && files[0] != undefined)
    {
		reader.file = files[0];
        fileName = files[0].name;
	}

    if(!errMsg)
    {
		obj.classList.toggle('btn-clicked');
        if(files != null && files != undefined && files[0] != null && files[0] != undefined)
        {
			if(!files[0].type.startsWith('image') && files[0].type != 'application/pdf')
			{
				errMsg = true;
				alert('Only Image and PDF file types are allowed.');
				document.getElementById('uploadAllergyNoteButton').style.display = 'block';
				document.getElementById('uploadedAllergyNoteDiv').style.display = 'none';
				document.getElementById('uploadConditionNoteButton').style.display = 'block';
				document.getElementById('uploadedConditionNoteDiv').style.display = 'none';
				return false;
			}
			else if(files[0].size > 3145728)
			{
				alert('Select a file less than 3 Mb. File size is too large. ');
				document.getElementById('uploadAllergyNoteButton').style.display = 'block';
				document.getElementById('uploadedAllergyNoteDiv').style.display = 'none';
				document.getElementById('uploadConditionNoteButton').style.display = 'block';
				document.getElementById('uploadedConditionNoteDiv').style.display = 'none';
				return false;
			}
            
			if(val == 'Allergy')
        	{
            	document.getElementById('allergyNoteUploadInProgress').innerHTML = 'Uploading '+files[0].name+'...';
        	}
        	else if(val == 'Condition')
        	{
            	document.getElementById('conditionNoteUploadInProgress').innerHTML = 'Uploading '+files[0].name+'...';
        	}
		
            reader.onload = function(e)
            {
                var att = new sforce.SObject("Attachment");
                att.Name = fileName;
                att.ContentType = this.file.type;
    
                var binary = "";
                var bytes = new Uint8Array(e.target.result);
                var length = bytes.byteLength;
    
                for (var i = 0; i < length; i++)
                {
                    binary += String.fromCharCode(bytes[i]);
                }
                att.Body = (new sforce.Base64Binary(binary)).toString();
                console.log(att.Name,fileType,val);
                SIS_MyAccountTab_MedicalInfo.submitMedicalEntry(att.Name, att.Body, att.ContentType, stuId, fileType,allergenSurgeryCondition,surgDate,val,
                    function(result, event)
                    {
                        document.getElementById('loading').style.display = 'none';
                        if(result != 'Success')
                        {
                        	alert('result');
                    	}
                        document.getElementById('allergyNoteUploadInProgress').innerHTML = '';
                        document.getElementById('conditionNoteUploadInProgress').innerHTML = '';
                        firstCancelMedicalEntry();
                        window.location.reload();
                    }
                );
            };
            reader.readAsArrayBuffer(files[0]);
        }
        else
        {
					SIS_MyAccountTab_MedicalInfo.submitMedicalEntry(null, null, null, stuId, fileName,allergenSurgeryCondition,surgDate,val,
					function(result, event)
					{
						document.getElementById('loading').style.display = 'none';
						if(result != 'Success')
						{
							alert(result);
						}
						window.location.reload();
					}
				);
			
        }
    }
    else
    {
    	return false;
    }
}

function deleteMedicalEntries(type)
{
    document.getElementById('medicalEntryViewTable').style.display = 'none';
    document.getElementById('createNewMedicalEntryButton').style.display = 'none';
    if(type == 'Allergy')
    {
        document.getElementById('allergyDeleteTable').style.display = 'block';
    }
    else if(type == 'Surgery')
    {
        document.getElementById('surgeryDeleteTable').style.display = 'block';
    }
    else if(type == 'Condition')
    {
        document.getElementById('conditionDeleteTable').style.display = 'block';
    }
    document.getElementById('medicalEntryDeletePanel').style.display = 'block';
}

function deleteMedicalEntry()
{
    var allInputElements = document.querySelectorAll('*[id^="deleteMedicalEntry"]');
    var selectedIDs = '';
    allInputElements.forEach(function(i)
    {
        if(i.type == 'checkbox' && i.checked)
        {
            var id = i.id.split('-')[1];
            if(selectedIDs == '')
            {
                selectedIDs += id;
            }
            else
            {
                selectedIDs += ','+id;
            }
        }
    });
    console.log(selectedIDs);
    if(selectedIDs == '')
    {
        alert('Please select at least one medical entry to delete.');
        return false;
    }
    else
    {
        var conf = confirm('Are you sure you want to delete the selected medical entries?');
        if(conf)
        {
            SIS_MyAccountTab_MedicalInfo.deleteMedicalEntry(selectedIDs,
                function(result, event)
                {
                    document.getElementById('loading').style.display = 'none';
                    if(result != 'Success')
                    {
                    	alert(result);
                	}
                    window.location.reload();
                }
            );
        }
        else
        {
            return false;
        }
    }
	
}
