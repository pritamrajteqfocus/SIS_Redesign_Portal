import { LightningElement, track, api, wire } from 'lwc';
import MenuCtrl from './menuController.js';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import CONTACT_ID from "@salesforce/schema/User.ContactId";
import CONTACT_NAME from "@salesforce/schema/User.Contact.Name";
import CONTACT_PHONE from "@salesforce/schema/User.Contact.Phone";
import CONTACT_COUNTRY_CODE from "@salesforce/schema/User.Contact.Country_Code__c";
import CONTACT_EMAIL from "@salesforce/schema/User.Contact.Email";
import CONTACT_CAMPUS from "@salesforce/schema/User.Contact.Campus_Preference__r.Name";
import USER_ID from "@salesforce/user/Id";

export default class App extends LightningElement {
    @track contactEmail;
    @track phonenum;
    @track countrycode;
    
    @wire(getRecord, { recordId: USER_ID, fields: [CONTACT_ID,CONTACT_NAME,CONTACT_EMAIL,CONTACT_CAMPUS,CONTACT_PHONE,CONTACT_COUNTRY_CODE] })
    user;

    get contactId() {
        return getFieldValue(this.user.data, CONTACT_ID);
    }
    get contactName() {
       
        return getFieldValue(this.user.data, CONTACT_NAME);
    }
    get userEmail() {
       
        return getFieldValue(this.user.data, CONTACT_EMAIL);
    }
    get contactCampus() {
       let tempPhone = getFieldValue(this.user.data, CONTACT_PHONE);
       var tecmpcode = this.countrycode = getFieldValue(this.user.data, CONTACT_COUNTRY_CODE);
       try{
        if(tecmpcode != undefined){
            this.phonenum = tempPhone.slice(JSON.stringify(tecmpcode).length + 1);
        }
       }catch(err){
          // alert(err.message);
       }
        return getFieldValue(this.user.data, CONTACT_CAMPUS);
    }
    
    title;
    isLoggedIn;
    loggedInUser;

    currentpage;
    currentsubpage;
    
    connectedCallback() {
        this.title = 'Student Portal';
        this.handleNavigateHome();
    }

    get topMenu() {
        return MenuCtrl.getTopMenu(this.isLoggedIn, this.currentpage)
    }

    get subMenu() {
        if (!this.isLoggedIn) {
            return null;
        }
        return MenuCtrl.getSubMenuFor(this.currentpage);
    }

    get controlMenu() {
        return MenuCtrl.getControlMenu(this.isLoggedIn);
    }

    handleLogout(event) {
        this.isLoggedIn = false;
        this.loggedInUser = null;
        this.currentpage = 'loggedout';
    }

    handleLogin(event) {
        this.isLoggedIn = true;
        this.loggedInUser = {
            name: 'Mlane',
            email: 'mlane@example.com',
            role: 'Student',
            picture: 'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg'
        };
        this.currentpage = 'about-me';
        this.handleCurrentSubPage();
    }

    handleCurrentSubPage(event) {
        const m = MenuCtrl.getSubMenuFor(this.currentpage);
        if (m && m.length) {
            this.currentsubpage = m[0].location;
        }
        else {
            this.currentsubpage = '';
        }
    }

    handleMenuSelect(event) {
        const selectedName = event.detail.selecteditem;
        this.currentpage = selectedName;
        if (this.currentpage == 'login') {
            this.handleLogin();
        }
        else if (this.currentpage == 'logout') {
            this.handleLogout();
        }
        else {
            this.handleCurrentSubPage();
        }
    }

    handleSubMenuSelect(event) {
        const selectedName = event.detail.selecteditem;
        this.currentsubpage = selectedName;
    }

    handleNavigateHome(event) {
        if (this.isLoggedIn) {
            this.currentpage = 'home';
        }
        else {
            this.currentpage = 'login'
        }
        this.currentsubpage = '';
    }
}