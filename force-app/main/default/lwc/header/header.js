import { LightningElement, track, api, wire } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import CONTACT_EMAIL from "@salesforce/schema/User.Contact.Email_2__c";
import CONTACT_NAME from "@salesforce/schema/User.Contact.Name";
import USER_ID from "@salesforce/user/Id";
export default class Header extends LightningElement {
    @api user;
    @wire(getRecord, { recordId: USER_ID, fields: [CONTACT_NAME, CONTACT_EMAIL] })
    user;

    get username() {
        return getFieldValue(this.user.data, CONTACT_NAME);
    }
    get useremail() {
        return getFieldValue(this.user.data, CONTACT_EMAIL);
    }
}