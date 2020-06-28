({
    menu: [
        {
            label: 'Home',
            location: 'home',
            icon: 'utility:home',
            position: 'top',
            show: 'private',
            visible: false
        },
        {
            label: 'About Me',
            location: 'about-me',
            icon: 'utility:user',
            position: 'top',
            show: 'private',
            visible: false
        },
        {
            label: 'Academics',
            location: 'academics',
            icon: 'utility:education',
            position: 'top',
            show: 'private',
            visible: false
        },
        {
            label: 'Careers',
            location: 'careers',
            icon: 'utility:case',
            position: 'top',
            show: 'private',
            visible: false
        },
        {
            label: 'ALU Pay',
            location: 'https://pay.example.com',
            icon: 'utility:currency',
            position: 'top',
            show: 'private',
            visible: false,
            external: true
        },
        {
            label: 'Support',
            location: 'support',
            icon: 'utility:info',
            position: 'control',
            show: 'always',
            visible: false
        },
        {
            label: 'Login',
            location: 'login',
            icon: 'utility:power',
            position: 'control',
            show: 'public',
            visible: false
        },
        {
            label: 'Logout',
            location: 'logout',
            icon: 'utility:logout',
            position: 'control',
            show: 'private',
            visible: false
        }
    ],

    getTopMenu: function(hasAccess, currentPage) {
        const _menu = [...this.menu].filter((item) => {
            return item.position == 'top'
                && ((item.show == 'always')
                    ||((item.show == 'private') && hasAccess)
                    ||((item.show == 'public') && !hasAccess))
        });
        return _menu.map((item) => {
            item.visible = (!item.external) && (currentPage == item.location);
            return Object.assign({},item);
        });
    },
    
    getControlMenu: function(hasAccess) {
        return [...this.menu].filter((item) => {
            return item.position == 'control'
                && ((item.show == 'always')
                    ||((item.show == 'private') && hasAccess)
                    ||((item.show == 'public') && !hasAccess))
        });
    },
    
    getSubMenuFor: function(path, component) {
        let submenus;
        let navList = component.get("v.menuItems1");
        for(let element of navList) {
            if(element.label == path) {
                submenus = element.subMenu;
                break;
            }
        }
        return submenus;
    },
            
    updateDrawerOpening:  function(component, event, helper) {
        component.set("v.openDrawer", component.get("v.userSelectedDrawerOpen")); 
    },
            
    handleMenuSelect : function(component, event, helper) {
        console.log("handleMenuSelect");
        let currentpage = component.get("v.currentpage");
        const selectedName = event.getParam('name');//event.detail.selecteditem;
        currentpage = selectedName;
        component.set("v.currentpage", currentpage);
        if (currentpage == 'login') {
            this.handleLogin(component, event, helper);
        }
        else if (currentpage == 'logout') {
            this.handleLogout(component, event, helper);
        }
        else {
            console.log("Boom!  " + currentpage);
            this.handleCurrentSubPage(component, event, helper);
        }
    },
            
    handleLogout : function(component, event, helper) {
        console.log("handleLogout");
        /*
        this.isLoggedIn = false;
        this.loggedInUser = null;
        
        this.currentpage = 'loggedout';*/
    },
    
    handleLogin : function(component, event, helper) {
        console.log("handleLogin");
        /*
        this.isLoggedIn = true;
        this.loggedInUser = {
            name: 'Marianne Lane',
            email: 'mlane@example.com',
            role: 'Student',
            picture: 'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg'
        };
        this.currentpage = 'about-me';
        this.handleCurrentSubPage();
        */
    },
    
    handleCurrentSubPage : function(component, event, helper) {
        console.log("handleCurrentSubPage");
        let currentpage = component.get("v.currentpage");
        let currentsubpage = '';
        const m = helper.getSubMenuFor(currentpage, component);
        if (m && m.length) {
            currentsubpage = m[0].label;
        }
        component.set("v.currentsubpage", currentsubpage);
    },
            
    handleSubMenuSelect : function(component, event, helper) {
        console.log("handleSubMenuSelect");
        //let currentsubpage = component.get("v.currentsubpage");
        const selectedSubId = event.getParam('name');
        console.log("selectedSubId " +selectedSubId);
        component.set("v.menuItems1", []);
        
        if (selectedSubId) {
            //component.getSuper().navigate(selectedSubId);
        }
        //const selectedName = event.detail.selecteditem;
        //this.currentsubpage = selectedName;
    },
})