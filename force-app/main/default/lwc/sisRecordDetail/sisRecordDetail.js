import { LightningElement, api, track } from 'lwc';
export default class RecordDetails extends LightningElement {
    @track editmodelopen = false;
    @track isSpinnerOpen = true;
    @track tempCountryCode;
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
    @api phonenum;
    @api countrycode;
    
    handleSubmit(event) {
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        if(this.title == 'General Contact Information' && (this.countrycode == undefined || this.countrycode == '' || this.phonenum == undefined || this.phonenum == '')){
            alert('Phone number is required');
            return false;
        }else if(this.title == 'General Contact Information'){
            fields.Phone = '+' + this.countrycode + this.phonenum;
            fields.Country_Code__c = this.countrycode;
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
    this.phonenum = event.target.value;
    }  
    handleChangeCountryCode(event) {
    this.countrycode = event.target.value;
    }   
    handleSuccess(){
        this.editmodelopen = false;
        this.isSpinnerOpen = false;
        this.iseditblock = true;
    }    
}