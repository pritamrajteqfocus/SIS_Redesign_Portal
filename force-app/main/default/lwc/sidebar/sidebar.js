import { LightningElement, track, api } from 'lwc';
import My_Logo from '@salesforce/resourceUrl/ALULogoNewPortal';
export default class Sidebar extends LightningElement {
    logo = My_Logo;

    @api menu;
    @api submenu;
    @api controlmenu;
    @api path;
    @api subpath;
    @api user;
    @api title;
    @api isloggedin;

    drawerVariant;
    openDrawer;
    userSelectedDrawerOpen;

    connectedCallback() {
        if (!this.userSelectedDrawerOpen){
            this.userSelectedDrawerOpen = true;
        }
        this.updateDrawerOpening();
        this.drawerVariant = true;
    }

    toggleDrawerVariant(event) {
        this.drawerVariant = !this.drawerVariant;
    }

    toggleDrawerState(event) {
        this.userSelectedDrawerOpen = !this.openDrawer;
        this.updateDrawerOpening();
    }

    updateDrawerOpening() {
        this.openDrawer = this.isloggedin && (this.submenu && this.submenu.length) && this.userSelectedDrawerOpen;
    }

    notifyMenuSelect(event) {
        this.dispatchEvent(new CustomEvent('menuselect', {detail : {selecteditem: event.detail.name}}));
        this.updateDrawerOpening();
    }

    notifyMenuClickSelect(event) {
        this.dispatchEvent(new CustomEvent('menuselect', {detail : {selecteditem: event.target.dataset.name}}));
        this.updateDrawerOpening();
    }

    notifySubMenuSelect(event) {
        this.dispatchEvent(new CustomEvent('submenuselect', {detail : {selecteditem: event.detail.name}}));
        this.updateDrawerOpening();
    }

    notifyNavigateHome(event) {
        this.dispatchEvent(new CustomEvent('navigatehome'));
    }
}