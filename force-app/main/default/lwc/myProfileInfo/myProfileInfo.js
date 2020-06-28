import { LightningElement, track, wire,api} from 'lwc';

import contactEmailMetadataMauritius from '@salesforce/apex/SIS_MyProfileController.contactEmailMetadataMauritius';
import My_Resource from '@salesforce/resourceUrl/DummyProPic';
import { getSObjectValue } from '@salesforce/apex';
export default class MyProfileInfo extends LightningElement {
  @api contactid;
  @track registeremail;
  @api campusname ;
  @api phonenum;
  @api countrycode;
  
    get fields() {
      let fields = [
        {
        apiname: 'Name',
        label: 'FULL NAME:',
        iscombofield:false
      },
      {
        apiname: 'Student_ID__c',
        label: 'STUDENT ID:',
        iscombofield:false
      },
      {
        apiname: 'ALU_Email__c',
        label: 'EMAIL:',
        iscombofield:false
      },
      {
        apiname: 'Birthdate',
        label: 'DOB:',
        iscombofield:false
      },
      {
        apiname: 'Nationality__c',
        label: 'COUNTRY OF RESIDENCY:',
        iscombofield:false
      }
      ];
      return fields;
    }
    get contactinfofields() {
      let contactinfofields = [
        {
        apiname: 'Email_2__c',
        label: 'PERSONAL EMAIL:',
        iscombofield:false
      },
      {
        apiname: 'Phone',
        label: 'PHONE NUMBER:',
        iscombofield:true
      },
      {
        apiname: 'Contact_Address__c',
        label: 'HOME ADDRESS:',
        iscombofield:false
      }
      ];
      return contactinfofields;
    }
    get otherinfofields() {
      let otherinfofields = [
        {
        apiname: 'City_of_Residence__c',
        label: 'CITY:',
        iscombofield:false
      },
      {
        apiname: 'Country_of_Residence__c',
        label: 'COUNTRY:',
        iscombofield:false
      },
      {
        apiname: 'Marital_Status__c',
        label: 'WHAT IS YOUR MARITAL STATUS?',
        iscombofield:false
      }
      ];
      return otherinfofields;
    }
    // call apex metod to get the email id from custom metadata according to logged-in user
    @wire(contactEmailMetadataMauritius , { campus: '$campusname' })
    wiredRecordsMethod({ error, data }) {
        if (data) {
            this.registeremail  = data;
           // this.error = undefined;
        } else if (error) {
           // this.error = error;
          //  this.data  = undefined;
        }
        this.tableLoadingState  = false;
    }
  
}