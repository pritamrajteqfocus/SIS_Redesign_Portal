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
            } else if (element.label == "Login") {
                element.icon = "utility:power";
            } else if (element.label == "Logout") {
                element.icon = "utility:logout";
            }
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
        console.log("selectedSubId " + selectedSubId);
        //component.set("v.menuItems1", []);
        if (selectedSubId) {
            component.getSuper().navigate(selectedSubId);
        }
        console.log("I'm alive");
    }

})