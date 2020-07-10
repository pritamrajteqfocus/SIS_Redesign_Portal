({
	setCurrentSubPagename : function(component, event, helper) {
		var currentPageName = event.getParam("currentPageName"); 
		component.set('v.currentPage', currentPageName);
	}
})