function signOut()
{
	var conf = confirm('Are you sure?');
	if(conf)
	{
		eraseCookie('apex__con');
		window.location.href = '/SIS_Login';
	}
	else
	{
		return false;
	}
}

function showMobileMenu()
{
	var nav = document.getElementById("navigation");
	var navStyle = window.getComputedStyle(nav);

	if(navStyle.width == '0px')
	{
		nav.style.width = "250px";
	}
	else
	{
		nav.style.width = "0px";
	}
	document.getElementById('mobileMenuIcon').classList.toggle('activeMobileMenu');
}

$(window).on("load",function() 
{
	$('.myi').powerTip({
	    placement: 'e',
	    smartPlacement: true
	});
	$('.myi').data('powertip', function() {
		return 'Missing your information';
	});

	$('.pencilIconEast').powerTip({
	    placement: 'e',
	    smartPlacement: true
	});
	$('.pencilIconWest').powerTip({
	    placement: 'w',
	    smartPlacement: true
	});
	$('.pencilIconEast').data('powertip', function() {
		return 'Edit';
	});
	$('.pencilIconWest').data('powertip', function() {
		return 'Edit';
	});
	$('.deleteIconWest').powerTip({
	    placement: 'w',
	    smartPlacement: true
	});
	$('.deleteIconWest').data('powertip', function() {
		return 'Delete';
	});
});
