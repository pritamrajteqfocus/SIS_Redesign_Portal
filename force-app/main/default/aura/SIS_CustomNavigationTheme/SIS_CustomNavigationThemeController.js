({
    doInit : function(component, event, helper) {
        //helper.updateDrawerOpening(component, event, helper);
    },
    
    handleMenuItemsChange : function(component, event, helper) {
        console.log("handleMenuItemsChange");
        let currentpage;
        let currentsubpage;
        
        let navList = component.get("v.menuItems");
        if(navList[0].id == 0) {
            navList.shift();
            //component.set("v.menuItems1", navList);
            //console.log("@ " + JSON.stringify(navList));
        }
        for(let element of navList) {
            if(element.label == "Home") {
                element.icon = "utility:home";
            } else if(element.label == "About Me") {
                element.icon = "utility:user";
            } else if(element.label == "Academics") {
                element.icon = "utility:education";
            } else if(element.label == "Careers") {
                element.icon = "utility:case";
            } else if(element.label == "ALU Pay") {
                element.icon = "utility:currency";
            } else if(element.label == "Support") {
                element.icon = "utility:info";
            } else if(element.label == "Login") {
                element.icon = "utility:power";
            } else if(element.label == "Logout") {
                element.icon = "utility:logout";
            }
            /*
            if(element.subMenu) {
                for(let subElement of element.subMenu) {
                    if(subElement.active == true) {
                        currentpage = element.label;
                        currentsubpage = subElement.label;                      
                    }
                }
            }*/
            
            //console.log("@ " + JSON.stringify(element));
        }
       // console.log("@ " + JSON.stringify(navList));
        component.set("v.menuItems1", navList);
        /*
        if(currentpage) {
            component.set("v.currentpage", currentpage);
        } if(currentsubpage) {
            component.set("v.currentsubpage", currentsubpage);
        }
        */
        
        //console.log("@@@ ");
        
        
    },
    
   /* topMenu : function(component, event, helper) {
        console.log("topMenu");
        let isLoggedIn = component.get("v.isLoggedIn");
        let currentpage = component.get("v.currentpage");
        console.log("@@ topMenu " + JSON.stringify(helper.getTopMenu(isLoggedIn, currentpage)));
        return helper.getTopMenu(isLoggedIn, currentpage);
    },

    subMenu : function(component, event, helper) {
        console.log("subMenu");
        let isLoggedIn = component.get("v.isLoggedIn");
        let currentpage = component.get("v.currentpage");
        if (!isLoggedIn) {
            return null;
        }
        return helper.getSubMenuFor(currentpage);
    },

    controlMenu : function(component, event, helper) {
        console.log("controlMenu");
        let isLoggedIn = component.get("v.isLoggedIn");
        console.log("@@ controlMenu " + JSON.stringify(helper.getControlMenu(isLoggedIn)));
        return helper.getControlMenu(isLoggedIn);
    },

    

    

    handleNavigateHome : function(component, event, helper) {
        console.log("handleNavigateHome");
        if (this.isLoggedIn) {
            this.currentpage = 'home';
        }
        else {
            this.currentpage = 'login'
        }
        this.currentsubpage = '';
    },

    onClick : function(component, event, helper) {
        console.log("onClick");
        var id = event.target.dataset.menuItemId;
        if (id) {
            component.getSuper().navigate(id);
         }
   },*/

   toggleDrawerState : function(component, event, helper) {
       console.log("toggleDrawerState");
       component.set("v.userSelectedDrawerOpen", !component.get("v.openDrawer"));
       helper.updateDrawerOpening(component, event, helper);
   },

    notifyNavigateHome : function(component, event, helper) {
        console.log("notifyNavigateHome");
    },

    notifyMenuSelect : function(component, event, helper) {
        helper.handleMenuSelect(component, event, helper);
        helper.updateDrawerOpening(component, event, helper);
        
    },

    notifyMenuClickSelect : function(component, event, helper) {
        console.log("notifyMenuClickSelect");
        let selectedName = event.currentTarget.getAttribute("data-name");
        component.set("v.currentpage", selectedName);
        helper.handleCurrentSubPage(component, event, helper);
        //helper.handleMenuSelect(component, event, helper);
        helper.updateDrawerOpening(component, event, helper);
    },
    
    notifySubMenuSelect : function(component, event, helper) {
        console.log("notifySubMenuSelect");
        const selectedSubId = event.getParam('name');
        console.log("selectedSubId " +selectedSubId);
        //component.set("v.menuItems1", []);
        if (selectedSubId) {
            component.getSuper().navigate(selectedSubId);
        }
        console.log("I'm alive");
         //$A.get('e.force:refreshView').fire();
        //helper.handleSubMenuSelect(component, event, helper);
        //helper.updateDrawerOpening(component, event, helper);
    }
   
})