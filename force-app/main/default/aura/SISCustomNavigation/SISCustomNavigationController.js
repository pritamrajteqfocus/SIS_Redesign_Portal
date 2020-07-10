({
    doInit: function (component, event, helper) {
        //helper.updateDrawerOpening(component, event, helper);
    },

    handleMenuItemsChange: function (component, event, helper) {
        console.log("handleMenuItemsChange");
        let currentpage;
        let currentsubpage;

        let navList = component.get("v.menuItems");
        if (navList[0].id == 0) {
            navList.shift();
        }
        for (let element of navList) {
            let position = "top";
            if (element.label == "Home") {
                element.icon = "utility:home";
            } else if (element.label == "About Me") {
                element.icon = "utility:user";
            } else if (element.label == "Academics") {
                element.icon = "utility:education";
            } else if (element.label == "Careers") {
                element.icon = "utility:case";
            } else if (element.label == "ALU Pay") {
                element.icon = "utility:currency";
            } else if (element.label == "Support") {
                element.icon = "utility:info";
                position = "control";
            } else if (element.label == "Login") {
                element.icon = "utility:power";
                position = "control";
            } else if (element.label == "Logout") {
                element.icon = "utility:logout";
                position = "control";
            }
            element.position = position;
        }
        component.set("v.menuItems1", navList);
    },
    toggleDrawerState: function (component, event, helper) {
        console.log("toggleDrawerState");
        component.set("v.userSelectedDrawerOpen", !component.get("v.openDrawer"));
        helper.updateDrawerOpening(component, event, helper);
    },

    notifyNavigateHome: function (component, event, helper) {
        console.log("notifyNavigateHome");
    },

    notifyMenuSelect: function (component, event, helper) {
        helper.handleMenuSelect(component, event, helper);
        helper.updateDrawerOpening(component, event, helper);

    },

    notifyMenuClickSelect: function (component, event, helper) {
        console.log("notifyMenuClickSelect");
        let selectedName = event.currentTarget.getAttribute("data-name");
        component.set("v.currentpage", selectedName);
        helper.handleCurrentSubPage(component, event, helper);
        //helper.handleMenuSelect(component, event, helper);
        helper.updateDrawerOpening(component, event, helper);
    },

    notifySubMenuSelect: function (component, event, helper) {
        console.log("notifySubMenuSelect");
        const selectedSubId = event.getParam('name');
        console.log(JSON.stringify(event));

        try {
            var element = component.find("menuToggle").getElement();
            $A.util.addClass(element, 'togglemenu');

            var element = component.find("spanbox1").getElement();
            $A.util.removeClass(element, 'span1');
            var element = component.find("spanbox2").getElement();
            $A.util.removeClass(element, 'span2');
            var element = component.find("spanbox3").getElement();
            $A.util.removeClass(element, 'span3');
        } catch (error) {
            alert(error.message)
        }
        //component.set("v.menuItems1", []);
        if (selectedSubId) {
            component.getSuper().navigate(selectedSubId);
            //Get the event using registerEvent name. 
            var cmpEvent = component.getEvent("currentPageName");
            //Set event attribute value
            cmpEvent.setParams({ "currentPageName": helper.getCurrentSubPage(component, event, helper) });
            cmpEvent.fire();
        }
        console.log("I'm alive");
    },
    toggleMenu: function (component, event, helper) {
        try {
            var element = component.find("menuToggle").getElement();
            $A.util.toggleClass(element, 'togglemenu');

            var element = component.find("spanbox1").getElement();
            $A.util.toggleClass(element, 'span1');
            var element = component.find("spanbox2").getElement();
            $A.util.toggleClass(element, 'span2');
            var element = component.find("spanbox3").getElement();
            $A.util.toggleClass(element, 'span3');
        } catch (error) {
            console.log(error.message)
        }

    },
    toggleSubmenu: function (component, event, helper) {
        try {
            var subMenuId = event.currentTarget.value;
            alert(subMenuId)
            var element = component.find("1togglemenu").getElement();
            $A.util.toggleClass(element, 'slds-hide');
        } catch (error) {
            alert(error.message)
        }

    }
})