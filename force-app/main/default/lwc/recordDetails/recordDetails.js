import { LightningElement, api, track, wire } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import CONTACT_ID from "@salesforce/schema/User.ContactId";
import CONTACT_NAME from "@salesforce/schema/User.Contact.Name";
import CONTACT_PHONE from "@salesforce/schema/User.Contact.Phone";
import CONTACT_COUNTRY_CODE from "@salesforce/schema/User.Contact.Country_Code__c";
import CONTACT_EMAIL from "@salesforce/schema/User.Contact.Email";
import CONTACT_CAMPUS from "@salesforce/schema/User.Contact.Campus_Preference__r.Name";
import USER_ID from "@salesforce/user/Id";

export default class RecordDetails extends LightningElement {
    @track contactEmail;
    @track phonenum;
    @track countrycode;
    
    @wire(getRecord, { recordId: USER_ID, fields: [CONTACT_ID,CONTACT_NAME,CONTACT_EMAIL,CONTACT_CAMPUS,CONTACT_PHONE,CONTACT_COUNTRY_CODE] })
    user;

    get contactId() {
        let tempPhone = getFieldValue(this.user.data, CONTACT_PHONE);
        var tecmpcode = this.countrycode = getFieldValue(this.user.data, CONTACT_COUNTRY_CODE);
        try{
         if(tecmpcode != undefined){
             this.phonenum = tempPhone.slice(JSON.stringify(tecmpcode).length + 1);
             this.tempPhone = this.phonenum;
         }
        }catch(err){
           // alert(err.message);
        }
        return getFieldValue(this.user.data, CONTACT_ID);
    }
  
    get contactCampus() {
      
        return getFieldValue(this.user.data, CONTACT_CAMPUS);
    }
    get code() {
      
        return getFieldValue(this.user.data, CONTACT_COUNTRY_CODE);
    }


    @track editmodelopen = false;
    @track isSpinnerOpen = true;
    @track tempPhone;
    //These all will come from parent component
    @api isprofilewithpic;
    @api recordid;
    @api fields;
    @api propic; 
    @api title;   
    @api contactregistaremail;
    @api iseditblock;
    @api classname;

    connectedCallback() {
        let obj = JSON.parse(this.fields);
        this.fields = obj;
    }
    handleSubmit(event) {
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        if(this.title == 'General Contact Information' && (this.code == undefined || this.code == '' || this.tempPhone == undefined || this.tempPhone == '')){
            alert('Phone number is required');
            return false;
        }else if(this.title == 'General Contact Information'){
            fields.Phone = '+' + this.code + this.tempPhone;
            fields.Country_Code__c = this.code;
        }
        this.isSpinnerOpen = true;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
    handleEditIcon(){
        this.editmodelopen = true;
        this.iseditblock = false;
    }
    cancelChanges(){
        this.editmodelopen = false;
        this.isSpinnerOpen = true;
        this.iseditblock = true;
    }
    handleOnLoad(){
        this.isSpinnerOpen = false;  
    }
    handleChangePhone(event) {
    this.tempPhone = event.target.value;
    }  
    handleChangeCountryCode(event) {
        this.code = event.target.value;
        }  
    handleSuccess(){
        this.editmodelopen = false;
        this.isSpinnerOpen = false;
        this.iseditblock = true;
    }    
}